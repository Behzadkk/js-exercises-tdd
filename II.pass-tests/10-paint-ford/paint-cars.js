module.exports = paintShop;
function paintShop(cars, colour) {
  const repaintedCars = cars.map(car => car);
  repaintedCars.map(paintedCar => {
    if (paintedCar.make === "Ford") {
      paintedCar.colour = colour;
    }
  });
  return repaintedCars;
}
