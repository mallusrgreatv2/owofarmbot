const startTyping = require("../startTyping");
const { settings } = require("../../config.json");
const sleep = require("../sleep");
/**
 *
 * @param {import("discord.js-selfbot-v13").Client} client The client
 * @param {String} prefix The prefix to log with
 * @param {String} channelID The channel ID to post the message in
 */
module.exports = async function huntAndBattle(client, prefix, channelID) {
  const channel = client.channels.cache.get(channelID);

  await startTyping(channel, !settings.typingindicator);
  await channel.send("owo hunt");
  console.log(`${prefix} | Hunt ✅`);

  setTimeout(async () => {
    await channel.send("owo battle");
    console.log(`${prefix} | Battle ✅`);
  }, 700);
  await sleep(1000)
};
