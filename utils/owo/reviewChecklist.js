const { updatechecklistsocket } = require("../socket/utils");
const startTyping = require("../startTyping");

/**
 *
 * @param {String} prefix The prefix to log with
 * @param {import("discord.js-selfbot-v13").Client} client The client
 * @param {String} channelID The channel ID to post the message in
 * @param {boolean} typingDisabled Whether typing indicator is disabled
 */
module.exports = async function reviewChecklist(
  prefix,
  client,
  channelID,
  typingDisabled
) {
  console.log(`${prefix} | Finding checklist...`);
  const channel = client.channels.cache.get(channelID);
  if (typingDisabled) await startTyping(channel);
  channel.send("owo cl");
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
    console.log(`${prefix} | Couldn't find checklist message`);
    return;
  }
  if (!msg || !msg.embeds[0]) {
    console.log(`${prefix} | Couldn't find checklist message`);
  }
  const description = msg.embeds[0].description;
  if (description.includes("☑️ 🎉")) {
    updatechecklistsocket("all", "✅");
    return;
  }
  if (description.includes("☑️ 💎")) {
    updatechecklistsocket("lb", "✅");
  }
  if (description.includes("☑️ ⚔")) {
    updatechecklistsocket("crate", "✅");
  }
  if(description.includes("⬛ 🎁")) {
    // TODO: Daily
  } else {
    updatechecklistsocket("daily", "✅");
  }
  if(description.includes("⬛ 🍪")) {
    // TODO: Cookie
  } else {
    updatechecklistsocket("cookie", "✅");
  }
  if (description.includes("⬛ 📝")) {
    console.log(`${prefix} | Daily vote available!`)
  } else {
    updatechecklistsocket("vote", "✅");
  }
  if (description.includes("⬛ 📜")) {
    // TODO: Autoquest
  } else {
    updatechecklistsocket("quest", "✅");
  }
};
