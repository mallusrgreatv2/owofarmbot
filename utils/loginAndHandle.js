/**
 * 
 * @param {import("discord.js-selfbot-v13").Client} client The client
 * @param {String} token The token to login with
 * @param {String} errorPrefix The prefix to show when there is an error.
 * @returns {void}
 * @throws DiscordAPIError
 */
module.exports = function loginAndHandle(client, token, errorPrefix) {
    try {
        client.login(token);
    } catch (err) {
        if(err.code === "TOKEN_INVALID") {
            console.log(`${errorPrefix} | Token is invalid, exiting...`);
            process.exit(1);
        }
        console.log(`${errorPrefix} | Error when logging in:`)
        throw err;
    }
}