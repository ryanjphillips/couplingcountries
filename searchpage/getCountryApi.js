// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    createCriteriaPanel()
// Return:      promise (obj)
// Description: This function grabs the countries API from https://restcountries.eu/rest/v2/all and returns a promise.

async function getCountryApi() {
  const countryData = await fetch('https://restcountries.eu/rest/v2/all');
  const countryObj = await countryData.json();

  return countryObj;
}
