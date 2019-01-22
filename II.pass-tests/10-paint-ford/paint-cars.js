module.exports = paintShop;
// function paintShop(cars, colour) {
//   const repaintedCars = cars.map(car => car);
//   repaintedCars.map(paintedCar => {
//     if (paintedCar.make === "Ford") {
//       paintedCar.colour = colour;
//     }
//   });
//   return repaintedCars;
// }

function paintShop(cars, newColor) {
  let newCars = cars.map(car => {
    if (car.make == "Ford") {
      return {
        make: "Ford",
        model: "Fiesta",
        colour: newColor
      };
    } else {
      return car;
    }
  });
  return newCars;
}
