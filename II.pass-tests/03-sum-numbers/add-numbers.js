function addNumbers(numbers) {
  let result = numbers.reduce((acc, item) => {
    return acc + item;
  });
  return result;
}
module.exports = addNumbers;
