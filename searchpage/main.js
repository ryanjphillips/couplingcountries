// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    main()
// Returns:     undefined
// Description: Creation (main loop) of the website page countrycoupling.com/searchpage

async function main() {
  try {
    const countryObj = await getCountryApi();
    let searchCriteria = '';

    // Display Default Screen
    countryObj.forEach((item) => {
      createCountryPanel(item.flag,
        item.name,
        item.population,
        item.languages,
        item.capital,
        item.area,
        item.region);
      createTable(item, 3, 'population', 1377422166);
    });

    // Updating Heading
    changeCriteriaHeading();

    // Determine Button Section

    getButton('name').addEventListener('click', () => {
      searchCriteria = updateAllButtonStyleOnClick('name', 'area', 'languages', 'gini', 'population', 'region');
    });

    getButton('region').addEventListener('click', () => {
      searchCriteria = updateAllButtonStyleOnClick('region', 'area', 'languages', 'gini', 'population', 'name');
    });

    getButton('area').addEventListener('click', () => {
      searchCriteria = updateAllButtonStyleOnClick('area', 'name', 'languages', 'gini', 'population', 'region');
    });

    getButton('languages').addEventListener('click', () => {
      searchCriteria = updateAllButtonStyleOnClick('languages', 'area', 'name', 'gini', 'population', 'region');
    });

    getButton('gini').addEventListener('click', () => {
      searchCriteria = updateAllButtonStyleOnClick('gini', 'area', 'languages', 'name', 'population', 'region');
    });

    getButton('population').addEventListener('click', () => {
      searchCriteria = updateAllButtonStyleOnClick('population', 'area', 'languages', 'gini', 'name', 'region');
    });

    getButton('scroll-to-data').addEventListener('click', () => {
      const rect = getButton('graph-heading').getBoundingClientRect();
      window.scrollTo(rect.top, rect.top);
    });

    getButton('to-top').addEventListener('click', () => {
      window.scrollTo(0, 0);
    });

    // Main Search Event
    getButton('search').addEventListener('input', (e) => {
      const userInput = (e.target.value);
      getButton('main-list').innerHTML = '';
      document.getElementById('figure-table').innerHTML = '';

      if (searchCriteria === getButton('name').textContent) {
        getCountryByName(countryObj, userInput);
        changeCriteriaHeading();
      } else if (searchCriteria === getButton('gini').textContent) {
        getCountryByGini(countryObj, userInput);
        changeCriteriaHeading();
      } else if (searchCriteria === getButton('population').textContent) {
        getPopulationByCountry(countryObj, userInput, 1);
        changeCriteriaHeading();
      } else if (searchCriteria === getButton('area').textContent) {
        getCountryByArea(countryObj, userInput);
        changeCriteriaHeading();
      } else if (searchCriteria === getButton('region').textContent) {
        getCountryByRegion(countryObj, userInput);
        changeCriteriaHeading();
      }
    });
  } catch (err) {
    updateOnApiError();
  }
}

main();
