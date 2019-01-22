module.exports = secondLargest;
function secondLargest(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 2];
}
