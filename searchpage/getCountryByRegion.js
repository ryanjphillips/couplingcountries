function getCountryByRegion(obj, input, alpha) {
  obj.filter((item) => item.region.toLowerCase().slice(0, input.length) === input.toLowerCase())
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
