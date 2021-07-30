function getPopulationByCountry(obj, input, alpha) {
  obj.filter((item) => item.population >= input).forEach((item) => {
    createCountryPanel(item.flag,
      item.name,
      item.population,
      item.languages,
      item.capital,
      item.area,
      item.region);
  });
}
