module.exports = function randomPhrase() {
  const { phrases } = require("../phrases/phrases.json");
  return phrases[Math.floor(Math.random() * phrases.length)];
};
