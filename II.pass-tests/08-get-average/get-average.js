// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
module.exports = average;
function average(array) {
  const numbers = array.filter(item => typeof item === "number");
  const total = numbers.reduce((acc, item) => acc + item);
  const average = total / numbers.length;
  return average;
}
