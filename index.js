const urlEncod = require("./urlEncod.json");
const letterCodes = require("./letterCodes.json");

function urlDecoder() {
  const arrUrl = [];
  for (let key in urlEncod) {
    const letter = findLetter(key);
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
}

const url = urlDecoder();
console.log(url);
