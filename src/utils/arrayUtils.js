function cutList(array, threshold) {
  return [array.slice(0, threshold), array.slice(threshold)];
}

export { cutList };
