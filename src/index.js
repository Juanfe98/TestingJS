const cities = ["Bogota", "Lima", "Buenos Aires", "Girardot"];

const getRandomCity = () => {
  return cities[Math.floor(Math.random() * cities.length)];
}

module.exports = {
  getRandomCity
}