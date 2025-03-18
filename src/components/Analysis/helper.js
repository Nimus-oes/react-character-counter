function wordCounter(text) {
  return text.length !== 0 ? text.split(" ").length : 0;
}

function sentenceCounter(text) {
  return text.length !== 0 ? text.split(".").length : 0;
}

export { wordCounter, sentenceCounter };
