// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    main()
// Returns:     undefined
// Description: Creation (main loop) of the website page countrycoupling.com/searchpage

function main() {
  // Getting Elements
  const getMainSearchButton = document.getElementById('search');
  const getMainList = document.getElementById('main-list');
  const searchCriteria = 'name';

  async function getCountryApi() {
    const countryData = await fetch('https://restcountries.eu/rest/v2/all');
    const countryObj = await countryData.json();
    navButtnOnClick(countryObj);

    // Display Default Screen
    countryObj.forEach((item) => {
      createCountryPanel(item.flag,
        item.name,
        item.population,
        item.languages,
        item.capital);
      });

      changeCriteriaHeading();

      getMainSearchButton.addEventListener('input', (e) => {
        const userInput = (e.target.value);
        getMainList.innerHTML = '';

        if (searchCriteria === 'name') {
          getCountryByName(countryObj, userInput, 1);
        }
      });
    }
  getCountryApi();
}
main();
