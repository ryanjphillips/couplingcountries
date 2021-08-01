// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    getCountryByArea()
// Return:      undefined
// Description: This function executes the search functionality for the name property and
//              displays the table and panel from said input.

function getCountryByName(obj, input) {
  obj.filter((item) => item.name.toLowerCase().slice(0, input.length) === input.toLowerCase())
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
