// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    getCountryByArea()
// Return:      undefined
// Description: This function executes the search functionality for the population property and
//              displays the table and panel from said input.

function getPopulationByCountry(obj, input) {
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
