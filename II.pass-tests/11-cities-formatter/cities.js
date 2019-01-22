function transform(city, country) {
  return `${city} is the capital of ${country}`;
}

function formatCities(capitals, transform) {
  const result = capitals.map(item => transform(item));
  return result;
}

module.exports = formatCities;
