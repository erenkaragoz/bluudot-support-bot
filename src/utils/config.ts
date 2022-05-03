import { config } from "dotenv";
import { ExcludeEnum } from "discord.js";
import { ActivityTypes } from "discord.js/typings/enums";
config();

const CONFIG = {
  token: process.env.TOKEN,
  memberID: "966059487238705175",
  guildId: "966045096074154004",
  // subRole: "967120105655894097",
  // subController: "966057444289687672",
  commands: {
    roles: {
      developer: "969589188532006912",
      designer: "969589184757117009",
      editor: "969589182299275284",
      customer: "966057477860904970",
    },
    choices: [
      {
        name: "Developer",
        value: "developer",
      },
      {
        name: "Designer",
        value: "designer",
      },
      {
        name: "Editor",
        value: "editor",
      },
      {
        name: "Customer",
        value: "customer",
      },
    ],
  },
  support: {
    channel: "967117614033825842",
    category: "966835658666684437",
    mods: "966057458529341440",
    arsiv: "967117790211346502",
  },
  // shop: {
  //   category: "966835658666684437",
  //   mods: "966057439701110794",
  //   channel: "967153671836168232",
  //   options: [
  //     {
  //       label: "Discord Bot",
  //       description: "Discord bot hizmeti için bir talep oluşturursunuz.",
  //       value: "discord-bot",
  //     },
  //     {
  //       label: "WhatsApp Bot",
  //       description: "WhatsApp Bot hizmeti için bir talep oluşturursunuz.",
  //       value: "whatsapp-bot",
  //     },
  //     {
  //       label: "API Wrapper",
  //       description: "API Wrapper hizmeti için bir talep oluşturursunuz.",
  //       value: "api",
  //     },
  //     {
  //       label: "Website",
  //       description: "Website hizmeti için bir talep oluşturursunuz.",
  //       value: "website",
  //     },
  //     {
  //       label: "Discord Banner",
  //       description:
  //         "Discord Banner (Sunucu, Kullanıcı) hizmeti için bir talep oluşturursunuz.",
  //       value: "discord-banner",
  //     },
  //     {
  //       label: "MTA Sistemleri",
  //       description: "MTA Sistemleri hizmeti için bir talep oluşturursunuz.",
  //       value: "mta-sistemleri",
  //     },
  //   ],
  // },
  game: {
    name: "bluudot server",
    type: "WATCHING" as ExcludeEnum<typeof ActivityTypes, "CUSTOM">,
  },
};

export { CONFIG };
