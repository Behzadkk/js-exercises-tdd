const getEvenNumbers = require("./get-even-numbers");
test("return even numbers", function() {
  //Arrange
  let expectedResult = [22, 82, 4];
  let input = [22, 13, 73, 82, 4];
  let results;
  //Act
  results = getEvenNumbers(input);
  //Assert
  expect(results).toEqual(expectedResult);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
