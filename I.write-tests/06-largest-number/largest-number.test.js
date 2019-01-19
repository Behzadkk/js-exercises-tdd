const getLargestNumber = require("./largest-number");
test("get the largest number", function() {
  //Arrange
  let expectedResult = 88;
  let input = [3, 21, 88, 4, 36];
  let result;
  //Act
  result = getLargestNumber(input);
  //Assert
  expect(result).toEqual(expectedResult);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
test("original array has not changed", function() {
  let expectedResult = [3, 21, 88, 4, 36];
  let input = [3, 21, 88, 4, 36];
  let sideEffects;
  //Act
  sideEffects = getLargestNumber(input);
  //Assert
  expect(input).toEqual(expectedResult);
});
