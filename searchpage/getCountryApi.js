async function getCountryApi() {
  const countryData = await fetch('https://restcountries.eu/rest/v2/all');
  const countryObj = await countryData.json();

  return countryObj;
}
