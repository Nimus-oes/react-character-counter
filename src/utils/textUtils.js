function noSpaceTotalChars(text) {
  return text.split(" ").join("").length;
}

function countWord(text) {
  return text.length !== 0 ? text.split(" ").length : 0;
}

function countSentence(text) {
  const splitByDot = text.split(".").length;
  if (text.length && splitByDot <= 2) {
    return 1;
  } else {
    return text.split(".").length - 1;
  }
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
    densityCount.push([char, count, density]);
  });

  return densityCount;
}

function getSortedDensity(text, minThreshold, ignoreCase, displayUpper) {
  const densityCount = getDensity(text, ignoreCase, displayUpper);
  densityCount.sort((a, b) => b[2] - a[2]);
  const rangedDensity = densityCount.filter((item) => item[2] >= minThreshold);
  return rangedDensity;
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
};
