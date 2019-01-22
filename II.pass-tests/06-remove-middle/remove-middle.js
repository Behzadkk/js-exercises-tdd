function removeMiddle(words) {
  const middle = Math.floor(words.length / 2);
  return words.splice(middle, 1);
}

module.exports = removeMiddle;
