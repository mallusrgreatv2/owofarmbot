const { TextChannel } = require("discord.js-selfbot-v13");
const { promisify } = require("util");
const sleep = promisify(setTimeout);
/**
 * 
 * @param {TextChannel} channel The channel to start typing on
 * @param {boolean} disabled Whether typing indicator is disabled
 * @returns {void}
 */
module.exports = async function startTyping(channel, disabled) {
    if(disabled) return;
    await channel.sendTyping();
    await sleep(642);
    return true;
}