function getCountryByName(obj, input, alpha) {
  obj.filter((item) => item.name.toLowerCase().slice(0, input.length) === input.toLowerCase()).forEach((item) => {
    createCountryPanel(item.flag,
      item.name,
      item.population,
      item.languages,
      item.capital);
  });
}
