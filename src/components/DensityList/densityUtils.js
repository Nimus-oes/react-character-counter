function cutList(array, threshold) {
  return [array.slice(0, threshold), array.slice(threshold)];
  // returns [[first list], [second list]]
}

function removeSpecialCharsSpaces(text) {
  return text.replace(/[^\p{L}]/gu, "");
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

  return densityCount; // returns [[char, count, density], ...] in no order
}

function getSortedDensity(text, minThreshold, ignoreCase, displayUpper) {
  const clearedText = removeSpecialCharsSpaces(text);
  const densityCount = getDensity(clearedText, ignoreCase, displayUpper);
  densityCount.sort((a, b) => b[2] - a[2]);
  const rangedDensity = densityCount.filter((item) => item[2] >= minThreshold);
  return rangedDensity; // returns [[char, count, density], ...] in order
}

export { cutList, getSortedDensity };
