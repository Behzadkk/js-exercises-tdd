const getLargestNumber = require("./largest-number");
test("get the largest number", function() {
  //Arrange
  let expectedResult = 88;
  let input = [3, 21, 88, 4, 36];
  let unchanged = [3, 21, 88, 4, 36];
  let result;
  //Act
  result = getLargestNumber(input);
  //Assert
  expect(result).toEqual(expectedResult);
  expect(input).toEqual(unchanged);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
