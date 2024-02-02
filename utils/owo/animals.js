const startTyping = require("../startTyping");
const { settings } = require("../../config.json");
const sleep = require("../sleep");
/**
 *
 * @param {import("discord.js-selfbot-v13").Client} client The client
 * @param {String} prefix The prefix to log with
 * @param {String} channelID The channel ID to post the message in
 */
module.exports = async function animals(client, prefix, channelID) {
  const channel = client.channels.cache.get(channelID);

  await startTyping(channel, !settings.typingindicator);
  const animaltypes = [];
  const ranks = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "mythical",
    "patreon",
    "cpatreon",
    "legendary",
    "gem",
    "bot",
    "distorted",
    "fabled",
    "special",
    "hidden",
  ];
  for (const rank of ranks) {
    if (!settings.animals.animaltype[rank]) continue;
    animaltypes.push(rank);
  }
  if (
    settings.animals.type === "sacrifice" ||
    settings.animals.type === "sell"
  ) {
    await channel.send(`owo ${settings.animals.type} ${animaltypes.join(" ")}`);
    console.log("Animals ✅");
  } else {
    console.log("Animals ❌");
  }
  await sleep(1000);
};
