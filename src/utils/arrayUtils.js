function cutList(array, threshold) {
  return [array.slice(0, threshold), array.slice(threshold)];
}

export { cutList };

console.log(cutList([1, 2, 3], 5));
