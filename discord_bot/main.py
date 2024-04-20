import settings
import discord
from discord.ext import commands

def main():
    intents = discord.Intents.default()
    intents.message_content = True

    bot = commands.Bot(command_prefix="$", intents=intents)

    @bot.event
    async def on_ready():
        print("Bot has started with username:", bot.user)

    @bot.command(
            aliases=['p'],
            help="",
            description="",
            brief="Responds with pong",
            enabled=True
    )
    async def ping(ctx):
        await ctx.send("pong")

    bot.run(settings.DISCORD_TOKEN)

if __name__ == "__main__":
    main()