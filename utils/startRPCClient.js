const DiscordRPC = require("discord-rpc");
/**
 *
 * @param {boolean} disabled Whether the RPC is disabled.
 * @param {String} clientId The ID of the RPC client
 * @returns {void}
 */
module.exports = function startRPCClient(disabled, clientId) {
  if (disabled) return;
  const rpc = new DiscordRPC.Client({ transport: "ipc" });
  rpc.on("ready", () => {
    rpc.setActivity({
      details: rpcdetails,
      state: `Hunt and Battle: ${rpchab} BanBypass: ${rpcbanb} Inventory: ${rpcinventory} Animals: ${rpcanimals}`,
      startTimestamp: new Date(),
      largeImageKey: "owo",
      largeImageText: `v${version}`,
      smallImageKey: "ban",
      smallImageText: rpcbant,
      instance: false,
      buttons: [
        {
          label: "Farm Bot",
          url: "https://github.com/Mid0aria/owofarmbot",
        },
        {
          label: "Developer",
          url: "https://github.com/Mid0aria/",
        },
      ],
    });
  });
  rpc.login({ clientId })
};
