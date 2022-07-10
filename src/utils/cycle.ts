import { Client } from "discord.js";
import { status } from "../lib/constants";

export function cycle(client: Client): void {
  const index = Math.floor(Math.random() * status.value.length);
  const activity = status.value[index];

  client.user?.setActivity(activity, { type: status.type });
}
