function fizzbuzz(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i.toString().includes("5") & i.toString().includes("3")) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0 || i.toString().includes("5")) {
      result.push("Buzz");
    } else if (i % 3 === 0 || i.toString().includes("3")) {
      result.push("Fizz");
    } else {
      result.push(i);
    }
  }
  return result.join(", ");
}

module.exports = fizzbuzz;
