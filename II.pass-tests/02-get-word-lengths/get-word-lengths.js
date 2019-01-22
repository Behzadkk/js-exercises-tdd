var getWordLengths = function(someWords) {
  let result = someWords.map(item => item.length);
  return result;
};

module.exports = getWordLengths;
