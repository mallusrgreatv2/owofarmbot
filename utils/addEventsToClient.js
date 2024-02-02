const notifier = require("node-notifier");
const reviewChecklist = require("./owo/reviewChecklist");
const config = require("../config.json");
const huntAndBattle = require("./owo/huntAndBattle");
const pray = require("./owo/pray");
const curse = require("./owo/curse");
const upgrade = require("./owo/upgrade");
const coinflip = require("./owo/coinflip");
const { updateerrorsocket } = require("./socket/utils");
const randomPhrase = require("./randomPhrase");
const { default: collect } = require("collect.js");
const startTyping = require("./startTyping");
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

        const interval = config.settings.times.intervals.huntbattle.enable
          ? config.settings.times.intervals.huntbattle.time
          : 17000;
        setInterval(
          () => huntAndBattle(client, errorPrefix, channelID),
          interval
        );
      }
      if (config.settings.animals.enable) {
        await animals(client, errorPrefix, channelID);
        const interval = config.settings.times.intervals.animals.enable
          ? config.settings.times.intervals.animals.time
          : 1200000;
        setInterval(() => animals(client, errorPrefix, channelID), interval);
      }
      if (config.settings.pray) {
        await pray(client, errorPrefix, channelID, mainID);

        const interval = config.settings.times.intervals.pray.enable
          ? config.settings.times.intervals.pray.time
          : 303000;
        setInterval(
          () => pray(client, errorPrefix, channelID, mainID),
          interval
        );
      }
      if (config.settings.curse) {
        await curse(client, errorPrefix, channelID, mainID);

        const interval = config.settings.times.intervals.curse.enable
          ? config.settings.times.intervals.curse.time
          : 303500;
        setInterval(
          () => curse(client, errorPrefix, channelID, mainID),
          interval
        );
      }
      if (config.settings.upgradeautohunt.enable) {
        await upgrade(client, errorPrefix, channelID, mainID);

        const interval = config.settings.times.intervals.upgrade.enable
          ? config.settings.times.intervals.upgrade.time
          : 1205000;
        setInterval(
          () => upgrade(client, errorPrefix, channelID, mainID),
          interval
        );
      }
      if (config.settings.gamble.coinflip.enable) {
        let currentBet = settings.gamble.coinflip.default_amount;
        const newCurrentBet = await coinflip(
          client,
          errorPrefix,
          channelID,
          currentBet
        );
        if (newCurrentBet) currentBet = newCurrentBet;
      }
    }, 5000);
  });
  client.on("message", (msg) => {
    if (msg.author.id !== "408785106942164992") return;
    if (msg.content.includes("captcha")) {
      global.mainbanc = false;
      console.log(`${errorPrefix} | Captcha!`);
      notifier.notify({
        title: `${errorPrefix} | Captcha Detected`,
        message: "Solve the captcha and restart the bot.",
        icon: "./utils/captcha.png",
        sound: true,
        wait: true,
      });
      updateerrorsocket(`${errorPrefix} | Solve Captcha!`);
      process.exit(0);
    } else {
      global.mainbanc = true;
      msg.channel.send(randomPhrase());
    }
    if (
      global.mainbanc &&
      (msg.content.includes("You found:") ||
        msg.content.includes("and caught a"))
    ) {
      const collection = collect(["alulu"]);
      console.log(`${errorPrefix} | Checking inventory... Type 1`);
      if (!msg.content.includes("gem1")) {
        collection.push("huntgem");
      }
      if (!msg.content.includes("gem3")) {
        collection.push("empgem");
      }
      if (!msg.content.includes("gem4")) {
        collection.push("luckgem");
      }
      if (
        cont.includes("gem1") &&
        cont.includes("gem3") &&
        cont.includes("gem4")
      ) {
        getInventory(
          token,
          channelID,
          errorPrefix,
          "nogem",
          collect(["nocollection"])
        );
      } else {
        getInventory(client, errorPrefix, channelID, "gemvar", collection);
      }
    }
  });
};
/**
 *
 * @param {import("discord.js-selfbot-v13").Client} client The client
 * @param {String} prefix The prefix to log with
 * @param {import("discord.js-selfbot-v13").TextChannel} channel The channel to send the message in
 * @param {String} gemCount The count of gems
 * @param {import("collect.js").Collection} collection The collection
 */
async function getInventory(client, prefix, channel, gemCount, collection) {
  await startTyping();
  await channel.send("owo inv");
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
    console.log(`${prefix} | Couldn't find inventory message`);
    return;
  }
  if (!msg) {
    console.log(`${prefix} | Couldn't find inventory message`);
  }
  if (gemc == "gemvar") {
    var empgem = "";
    var empgemstatus = false;
    var luckgem = "";
    var luckgemstatus = false;
    var huntgem = "";
    var huntgemstatus = false;
    var specialgem = "";
    var specialgemstatus = false;
    var gem = "";
    var gemusebro = false;

    if (collectc.contains("huntgem")) {
        switch (true) {
            case cont.includes("`057`"):
                huntgem = "57";
                huntgemstatus = true;
                break;
            case cont.includes("`056`"):
                huntgem = "56";
                huntgemstatus = true;
                break;
            case cont.includes("`055`"):
                huntgem = "55";
                huntgemstatus = true;
                break;
            case cont.includes("`054`"):
                huntgem = "54";
                huntgemstatus = true;
                break;
            case cont.includes("`053`"):
                huntgem = "53";
                huntgemstatus = true;
                break;
            case cont.includes("`052`"):
                huntgem = "52";
                huntgemstatus = true;
                break;
            case cont.includes("`051`"):
                huntgem = "51";
                huntgemstatus = true;
                break;
            default:
                huntgemstatus = false;
                break;
        }
    }
    if (collectc.contains("empgem")) {
        switch (true) {
            case cont.includes("`071`"):
                empgem = "71";
                empgemstatus = true;
                break;
            case cont.includes("`070`"):
                empgem = "70";
                empgemstatus = true;
                break;
            case cont.includes("`069`"):
                empgem = "69";
                empgemstatus = true;
                break;
            case cont.includes("`068`"):
                empgem = "68";
                empgemstatus = true;
                break;
            case cont.includes("`067`"):
                empgem = "67";
                empgemstatus = true;
                break;
            case cont.includes("`066`"):
                empgem = "66";
                empgemstatus = true;
                break;
            case cont.includes("`065`"):
                empgem = "65";
                empgemstatus = true;
                break;
            default:
                empgemstatus = false;
                break;
        }
    }
    if (collectc.contains("luckgem")) {
        switch (true) {
            case cont.includes("`078`"):
                luckgem = "78";
                luckgemstatus = true;
                break;
            case cont.includes("`077`"):
                luckgem = "77";
                luckgemstatus = true;
                break;
            case cont.includes("`076`"):
                luckgem = "76";
                luckgemstatus = true;
                break;
            case cont.includes("`075`"):
                luckgem = "75";
                luckgemstatus = true;
                break;
            case cont.includes("`074`"):
                luckgem = "74";
                luckgemstatus = true;
                break;
            case cont.includes("`073`"):
                luckgem = "73";
                luckgemstatus = true;
                break;
            case cont.includes("`072`"):
                luckgem = "72";
                luckgemstatus = true;
                break;
            default:
                luckgemstatus = false;
                break;
        }
    }

    if (collectc.contains("specialgem")) {
        switch (true) {
            case cont.includes("`085`"):
                specialgem = "85";
                specialgemstatus = true;
                break;
            case cont.includes("`084`"):
                specialgem = "84";
                specialgemstatus = true;
                break;
            case cont.includes("`083`"):
                specialgem = "83";
                specialgemstatus = true;
                break;
            case cont.includes("`082`"):
                specialgem = "82";
                specialgemstatus = true;
                break;
            case cont.includes("`081`"):
                specialgem = "81";
                specialgemstatus = true;
                break;
            case cont.includes("`080`"):
                specialgem = "80";
                specialgemstatus = true;
                break;
            case cont.includes("`079`"):
                specialgem = "79";
                specialgemstatus = true;
                break;
            default:
                specialgemstatus = false;
                break;
        }
    }

    if (huntgemstatus) {
        var gem = gem + ` ${huntgem}`;
        gemusebro = true;
    }
    if (empgemstatus) {
        var gem = gem + ` ${empgem}`;
        gemusebro = true;
    }
    if (luckgemstatus) {
        var gem = gem + ` ${luckgem}`;
        gemusebro = true;
    }
    if (specialgemstatus) {
        var gem = gem + ` ${specialgem}`;
        gemusebro = true;
    }
    if (gemusebro) {
        gemuse(token, gem, channelid, tokentype);
    }
}

if (settings.inventory.lootboxcheck) {
    if (cont.includes("`050`")) {
        setTimeout(() => {
            boxuse(token, "lootbox all", channelid, tokentype);
        }, 2000);
    }
}

if (settings.inventory.fabledlootboxcheck) {
    if (cont.includes("`049`")) {
        setTimeout(() => {
            boxuse(
                token,
                "lootbox fabled all",
                channelid,
                tokentype
            );
        }, 2000);
    }
}

if (settings.inventory.cratecheck) {
    if (cont.includes("`100`")) {
        setTimeout(() => {
            boxuse(token, "crate all", channelid, tokentype);
        }, 2000);
    }
}

if (settings.inventory.eventcheck) {
    if (cont.includes("`018`")) {
        // valentines day
        setTimeout(() => {
            eventuse(token, "18", channelid, tokentype);
        }, 2000); //E <3
    }
    if (cont.includes("`019`")) {
        // anniversary day
        setTimeout(() => {
            eventuse(token, "19", channelid, tokentype);
        }, 2000);
    }
    if (cont.includes("`020`")) {
        // fakelootbox
        setTimeout(() => {
            eventuse(token, "20", channelid, tokentype);
        }, 2000);
    }
    if (cont.includes("`23`")) {
        setTimeout(() => {
            eventuse(token, "23", channelid, tokentype);
        }, 2000);
    }
}
}
