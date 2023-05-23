async function getExchangeRate(currencyCode) {
  await fetch("https://api.exchangerate.host/latest")
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[currencyCode];
      if (rate) {
        console.log(
          `Exchange Currency rate of ${currencyCode} with ${
            data.base
          } is ${rate.toFixed(4)}`
        );
      } else {
        return null;
      }
    })
    .catch((error) => console.log(error));
}
getExchangeRate("USD");
