function getCountryByGini(obj, input, alpha) {
  obj.filter((item) => item.gini >= input)
    .forEach((item) => {
      createCountryPanel(item.flag,
        item.name,
        item.population,
        item.languages,
        item.capital,
        item.area,
        item.region);
    });
}
