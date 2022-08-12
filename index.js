const urlEncod = require("./urlEncod.json");
const letterCodes = require("./letterCodes.json");

function urlDecoder() {
  const arrUrl = [];
  for (let key in urlEncod) {
    const letter = findLetter(key);
    if (!letter) return "Bad url";
    const positions = urlEncod[key];
    positions.forEach((pos) => {
      arrUrl[pos] = letter;
    });
  }
  return arrUrl.join("");
}

function findLetter(keyFound) {
  for (let key in letterCodes) {
    if (letterCodes[key] === keyFound) return key;
  }
  return null;
}

const url = urlDecoder();
console.log(url);
