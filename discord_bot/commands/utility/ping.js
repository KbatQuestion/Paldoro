const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 1,
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with roundtrip latency & websocket latency"),

  async execute(interaction) {
    const sent = await interaction.reply({
      content: "Pinging...",
      fetchReply: true,
    });
    interaction.editReply(
      `API Roundtrip latency: ${
        sent.createdTimestamp - interaction.createdTimestamp
      }ms\nWebsocket heartbeat: ${interaction.ping}ms`
    );
  },
};
