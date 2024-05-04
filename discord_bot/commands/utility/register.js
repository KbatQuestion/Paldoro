const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 2, // TODO: Update to 30 seconds or more in global deployment
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("Registers a new user to Paldoro")
    .addStringOption((option) =>
      option
        .setName("password")
        .setDescription("password for logging into Paldoro")
        .setMinLength(8)
        .setMaxLength(72)
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("password_confirmation")
        .setDescription("confirm password")
        .setMinLength(8)
        .setMaxLength(72)
        .setRequired(true)
    ),

  async execute(interaction, pb, ping) {
    console.log(interaction);
    await interaction.deferReply({
      ephemeral: true,
    });

    await interaction.followUp({
      content: "Registering...",
    });

    try {
      await pb
        .collection("users")
        .getFirstListItem(`discord_id='${interaction.user.id}'`);

      await interaction.editReply({
        content: "User already exists, registration failed :(",
      });

      return;
    } catch (error) {}

    try {
      await pb.collection("users").create({
        discord_id: interaction.user.id,
        username: interaction.user.username,
        avatar_hash: interaction.user.avatar,
        password: interaction.options.getString('password'),
        passwordConfirm: interaction.options.getString('passwordConfirmation'),
        verified: true,
      });
      await interaction.editReply({
        content: `Registration Completed Successfully :)`,
      });
    } catch (error) {
      console.log(`Failed to register user with ID: ${interaction.user.id}`);
      await interaction.editReply({
        content: `An error occurred, registration failed :(`,
      });
      console.log(error);
    }
  },
};
