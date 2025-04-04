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

export { noSpaceTotalChars, countWord, countSentence };
