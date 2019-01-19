var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  // Arrange
  let expectedResult = [32, 21];
  let input = [4, 10, 32, 9, 21];
  let result;
  //Act
  result = largerThanTen(input);
  //Assert
  expect(result).toEqual(expectedResult);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
