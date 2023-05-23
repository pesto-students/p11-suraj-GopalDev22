const getTemperatureForCity = (() => {
  const temperatureData = {
    "New York": 20,
    London: 18,
    Paris: 22,
    Tokyo: 25,
    Sydney: 28,
  };

  const cache = {};

  return (city) => {
    if (cache[city]) {
      return cache[city];
    } else {
      const temperature = temperatureData[city];
      cache[city] = temperature;
      return temperature;
    }
  };
})();

// Example usage:
const temperature1 = getTemperatureForCity("New York");
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity("New York");
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity("London");
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity("London");
console.log(temperature4); // 18 (retrieved from cache)
