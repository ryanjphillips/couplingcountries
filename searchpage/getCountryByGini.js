// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    getCountryByArea()
// Return:      undefined
// Description: This function executes the search functionality for the gini property and
//              displays the table and panel from said input.

function getCountryByGini(obj, input) {
  (obj.filter((item) => item.gini >= input))
    .sort((b, a) => a.gini - b.gini)
    .forEach((item) => {
      createCountryPanel(item.flag,
        item.name,
        item.population,
        item.languages,
        item.capital,
        item.area,
        item.region);
      createTable(item, 3, 'gini', 65.8);
    });
}
