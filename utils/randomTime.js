/**
 * 
 * @returns {String}
 */
module.exports = function randomTime() {
    var s = Math.floor(Math.random() * 9);
    if (s == 0) s = Math.floor(Math.random() * 9);
    return s + "000";
}