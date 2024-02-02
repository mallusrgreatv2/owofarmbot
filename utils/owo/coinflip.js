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
module.exports = async function coinflip(client, prefix, channelID, currentBet) {
  const channel = client.channels.cache.get(channelID);

  await startTyping(channel, !settings.typingindicator);
  await channel.send(`owo coinflip ${currentBet}`);
  /**
   * @type {import("discord.js-selfbot-v13").Message}
   */
  let msg;
  try {
    msg = await channel.awaitMessages({
      max: 1,
      filter: (m) => m.author.id === "408785106942164992",
    });
  } catch (err) {
    console.log(`${prefix} | Couldn't find coinflip message`);
    return;
  }
  if (!msg) {
    console.log(`${prefix} | Couldn't find coinflip message`);
  }
  if (msg.content.includes("and you lost it all... :c")) {
    currentBet *= settings.gamble.coinflip.multipler;
    if (Number.isNaN(currentBet)) {
      currentBet = currentBet;
    } else {
      currentBet = Math.round(currentBet);
    }
    const lostamount = Math.round(
      currentBet / settings.gamble.coinflip.multipler
    );
    if (currentBet > maxBet) {
      currentBet = settings.gamble.coinflip.default_amount;
    }
    console.log(
      `Lost ${lostamount} from coinflip, betting ${currentBet} next.`
    );
    return currentBet;
  } else if (msg.content.includes("and you won")) {
    console.log(`You have won ${currentBet} in coinflip!`);
    currentBet = settings.gamble.coinflip.default_amount;
    return currentBet;
  }
  await sleep(1000);
};
