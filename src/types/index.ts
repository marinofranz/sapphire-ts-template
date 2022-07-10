import { ExcludeEnum } from "discord.js";
import { ActivityTypes } from "discord.js/typings/enums";

export interface Status {
  type: ExcludeEnum<typeof ActivityTypes, "CUSTOM">;
  value: string[];
}
