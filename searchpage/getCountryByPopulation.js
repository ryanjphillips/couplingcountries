function getPopulationByCountry(obj, input, alpha) {
  (obj.filter((item) => item.population >= input))
    .sort((b, a) => a.population - b.population)
    .forEach((item) => {
      createCountryPanel(item.flag,
        item.name,
        item.population,
        item.languages,
        item.capital,
        item.area,
        item.region);
      createTable(item, 3, 'population', 1377422166);
    });
}
