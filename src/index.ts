import { LogLevel, SapphireClient } from "@sapphire/framework";
import { config } from "dotenv";
import { cycle } from "./utils/cycle";

config();

const client = new SapphireClient({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_VOICE_STATES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
  ],
  shards: "auto",
  logger: {
    level: LogLevel.Info,
  },
});

(async () => {
  try {
    await client.login(process.env.DISCORD_TOKEN);
    client.logger.info(`Logged in as ${client.user?.tag}`);
    cycle(client);
  } catch (error) {
    client.logger.fatal(error);
    client.destroy();
    process.exit(1);
  }
})();
