const notifier = require("node-notifier");
const reviewChecklist = require("./owo/reviewChecklist");
const config = require("../config.json");
const huntAndBattle = require("./owo/huntAndBattle");
const pray = require("./owo/pray");
const curse = require("./owo/curse");
const upgrade = require("./owo/upgrade");
/**
 *
 * @param {import("discord.js-selfbot-v13").Client} client The client
 * @param {String} errorPrefix The prefix to show when there is an error.
 * @param {String} channelID The ID of the channel to post messages in
 * @param {Strnig} mainID The ID of the main token
 * @returns {void}
 */
module.exports = function addEventsToClient(
  client,
  errorPrefix,
  channelID,
  mainID
) {
  client.on("ready", async (readyClient) => {
    console.log(`${errorPrefix} | Ready as ${readyClient.user.tag}`);
    reviewChecklist(errorPrefix, readyClient, channelID);
    setTimeout(async () => {
      if (config.settings.huntandbattle) {
        await huntAndBattle(client, errorPrefix, channelID);
      }
      if (config.settings.animals.enable) {
        await animals(client, errorPrefix, channelID);
      }
      if (config.settings.pray) {
        await pray(client, errorPrefix, channelID, mainID);
      }
      if (config.settings.curse) {
        await curse(client, errorPrefix, channeLDI, mainID);
      }
      if (config.settings.upgradeautohunt.enable) {
        await upgrade(client, errorPrefix, channelID, mainID);
      }
    }, 5000);
  });
  client.on("message", (msg) => {
    if (msg.author.id !== "408785106942164992") return;
    if (msg.content.includes("captcha")) {
      console.log(`${errorPrefix} | Captcha!`);
      notifier.notify({
        title: `${errorPrefix} | Captcha Detected`,
        message: "Solve the captcha and restart the bot.",
        icon: "./utils/captcha.png",
        sound: true,
        wait: true,
      });
    }
  });
};
