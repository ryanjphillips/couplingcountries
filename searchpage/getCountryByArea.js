// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    getCountryByArea()
// Return:      undefined
// Description: This function executes the search functionality for the area property and
//              displays the table and panel from said input.

function getCountryByArea(obj, input) {
  (obj.filter((item) => item.area >= input))
    .sort((b, a) => a.area - b.area)
    .forEach((item) => {
      createCountryPanel(item.flag,
        item.name,
        item.population,
        item.languages,
        item.capital,
        item.area,
        item.region);
        createTable(item, 3, 'area', 17124442);
    });
}
