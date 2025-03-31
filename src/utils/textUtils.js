function limitText(text, maxLength) {
  return text.slice(0, maxLength);
}

function removeSpecialCharsSpaces(text) {
  return text.replace(/[^\p{L}]/gu, "");
}

function noSpaceTotalChars(text) {
  return text.split(" ").join("").length;
}

function countWord(text) {
  const wordList = text.split(" ").filter((item) => item !== "");
  return wordList.length;
}

function countSentence(text) {
  const sentenceList = text
    .split(/[.?!]/) // Split by ".", "?", or "!"
    .map((item) => item.trim())
    .filter((item) => item !== "");
  return sentenceList.length;
}

function countEachChar(text, ignoreCase, displayUpper) {
  const counter = {};
  const chars = text.split("");
  chars.forEach((char) => {
    let casedChar = char;
    if (ignoreCase) {
      casedChar = displayUpper ? char.toUpperCase() : char.toLowerCase();
    }
    counter[casedChar] ? (counter[casedChar] += 1) : (counter[casedChar] = 1);
  });
  return new Map(Object.entries(counter));
}

function getDensity(text, ignoreCase, displayUpper) {
  const charCount = countEachChar(text, ignoreCase, displayUpper);
  const densityCount = [];
  charCount.forEach((count, char) => {
    const density = (count / text.length) * 100;
    const roundedDensity = density.toFixed(2);
    densityCount.push([char, count, roundedDensity]);
  });

  return densityCount;
}

function getSortedDensity(text, minThreshold, ignoreCase, displayUpper) {
  const clearedText = removeSpecialCharsSpaces(text);
  const densityCount = getDensity(clearedText, ignoreCase, displayUpper);
  densityCount.sort((a, b) => b[2] - a[2]);
  const rangedDensity = densityCount.filter((item) => item[2] >= minThreshold);
  return rangedDensity; // returns [[char, count, density], ...]
}

function getReadingTime(text, wordsPerMin) {
  return Math.ceil(countWord(text) / wordsPerMin);
}

export {
  noSpaceTotalChars,
  countWord,
  countSentence,
  getSortedDensity,
  getReadingTime,
  limitText,
};
