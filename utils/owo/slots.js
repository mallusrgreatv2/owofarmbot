const startTyping = require("../startTyping");
const { settings } = require("../../config.json");
const sleep = require("../sleep");
/**
 *
 * @param {import("discord.js-selfbot-v13").Client} client The client
 * @param {String} prefix The prefix to log with
 * @param {String} channelID The channel ID to post the message in
 * @param {String} currentBet
 */
module.exports = async function coinflip(client, prefix, channelID) {
  const channel = client.channels.cache.get(channelID);

  await startTyping(channel, !settings.typingindicator);
  await channel.send(`owo slots ${settings.gamble.slots.amount}`);
  console.log(`Gamble / Slots ✅ / Amount: ${settings.gamble.slots.amount}`);
  await sleep(1000);
};
