module.exports = sales;
function sales(carsSold) {
  //making the result object
  let totals = {};
  // categorise based on brand
  for (let i = 0; i < carsSold.length; i++) {
    totals[carsSold[i].make] = 0;
    //total price
    for (let j = 0; j < carsSold.length; j++) {
      if (carsSold[i].make === carsSold[j].make) {
        totals[carsSold[i].make] += carsSold[j].price;
      }
    }
  }
  return totals;
}
