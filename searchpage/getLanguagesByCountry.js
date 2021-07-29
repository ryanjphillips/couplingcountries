function getLanguagesByCountry(obj, input, alpha) {
  const newRegEx = new RegExp(input, 'gi');
  obj.filter((item) => ((formatLanguagesObjectToString(item.languages)).search(newRegEx).forEach((item) => {
    createCountryPanel(item.flag,
      item.name,
      item.population,
      item.languages,
      item.capital);
  })));
}
