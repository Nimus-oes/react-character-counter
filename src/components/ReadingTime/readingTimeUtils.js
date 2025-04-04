function countWord(text) {
  const wordList = text.split(" ").filter((item) => item !== "");
  return wordList.length;
}

function getReadingTime(text, wordsPerMin) {
  return Math.ceil(countWord(text) / wordsPerMin);
}

export { getReadingTime };
