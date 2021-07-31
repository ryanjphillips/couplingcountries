// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    getCountryByArea()
// Return:      undefined
// Description: This function executes the search functionality for the area.

function getCountryByArea(obj, input, alpha) {
  obj.filter((item) => item.area >= input).forEach((item) => {
    createCountryPanel(item.flag,
      item.name,
      item.population,
      item.languages,
      item.capital,
      item.area,
      item.region);
  });
}
