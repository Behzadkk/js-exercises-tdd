const removeVowelsForWords = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function() {
  // Arrange
  let expectedResult = ["rn", "tz", "dnl"];
  let input = ["Irina", "Etza", "Daniel"];
  let result;
  // Act
  result = removeVowelsForWords(input);
  // Assert
  expect(result).toEqual(expectedResult);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
