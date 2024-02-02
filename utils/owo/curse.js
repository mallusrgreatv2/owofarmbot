const startTyping = require("../startTyping");
const { settings } = require("../../config.json");
const sleep = require("../sleep");
/**
 *
 * @param {import("discord.js-selfbot-v13").Client} client The client
 * @param {String} prefix The prefix to log with
 * @param {String} channelID The channel ID to post the message in
 * @param {String} user User ID to curse
 */
module.exports = async function curse(client, prefix, channelID, user) {
  const channel = client.channels.cache.get(channelID);

  await startTyping(channel, !settings.typingindicator);
  await channel.send(`owo curse${user ? `<@${user}>` : ""}`)
  console.log(`Curse ✅`)
  await sleep(1000);
};
