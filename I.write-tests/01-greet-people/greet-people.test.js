const greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  let expectedResult = "Hello IrinaAshleighEtza";
  let mentors = ["Irina", "Ashleigh", "Etza"];
  let result;
  // Act
  result = greetPeople(mentors);
  // Assert
  expect(result).toEqual(expectedResult);
});
