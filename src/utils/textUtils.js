function countWord(text) {
  return text.length !== 0 ? text.split(" ").length : 0;
}

function countSentence(text) {
  return text.length !== 0 ? text.split(".").length : 0;
}

function countEachChar(text) {
  const counter = {};
  const chars = text.split("");
  chars.forEach((char) => {
    counter[char] ? (counter[char] += 1) : (counter[char] = 1);
  });
  return new Map(Object.entries(counter));
}

function getDensity(text) {
  const charCount = countEachChar(text);
  const densityCount = [];
  charCount.forEach((count, char) => {
    const density = (count / text.length) * 100;
    densityCount.push([char, count, density]);
  });

  return densityCount;
}

function getSortedDensity(text, minThreshold) {
  const densityCount = getDensity(text);
  densityCount.sort((a, b) => b[2] - a[2]);
  const rangedDensity = densityCount.filter((item) => item[2] >= minThreshold);
  return rangedDensity;
}

export { countWord, countSentence, getSortedDensity };
