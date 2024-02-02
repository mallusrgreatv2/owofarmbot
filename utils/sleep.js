const { promisify } = require("util");
module.exports = {
    sleep: promisify(setTimeout)
};