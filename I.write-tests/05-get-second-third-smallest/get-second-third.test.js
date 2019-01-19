const secondThird = require("./get-second-third");
test("get the second and third element", function() {
  //Arrange
  let expected = [6, 8];
  let input = [90, 5, 11, 8, 6];
  let result;
  //Act
  result = secondThird(input);
  //Assert
  expect(result).toEqual(expected);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
