import os
import discord
from discord.ext import commands
from dotenv import load_dotenv

load_dotenv()

DISCORD_TOKEN = os.getenv("DISCORD_TOKEN")

def main():
    intents = discord.Intents.default()

    bot = commands.Bot(command_prefix="$", intents=intents)

    @bot.event
    async def on_ready():
        print("Bot has started with username:", bot.user)

    bot.run(DISCORD_TOKEN)

if __name__ == "__main__":
    main()