const removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  let expectedResult = "sml";
  let test = "samuel";
  let result;
  // Act
  result = removeVowels(test);
  // Assert
  expect(result).toEqual(expectedResult);
});
