// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    main()
// Returns:     undefined
// Description: Creation (main loop) of the website page countrycoupling.com/searchpage

function main() {
  // Getting Elements
  const getMainSearchButton = document.getElementById('search');
  const getMainList = document.getElementById('main-list');
  let searchCriteria = '';
  const getNameButton = document.getElementById('name');
  const getRegionButton = document.getElementById('region');
  const getAreaButton = document.getElementById('area');
  const getLanguageButton = document.getElementById('languages');
  const getGiniButton = document.getElementById('gini');
  const getPopulationButton = document.getElementById('population');

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
        item.capital,
        item.area,
        item.region);
    });

    // Updating Heading
    changeCriteriaHeading();

    // Determine Button Section

    getNameButton.addEventListener('click', () => {
      searchCriteria = getNameButton.textContent;
      getNameButton.style.backgroundColor = 'rgba(255, 99, 71, 1)';
      getPopulationButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getAreaButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getRegionButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getLanguageButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getGiniButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
    });

    getRegionButton.addEventListener('click', () => {
      searchCriteria = getRegionButton.textContent;
      getRegionButton.style.backgroundColor = 'rgba(255, 99, 71, 1)';
      getPopulationButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getAreaButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getNameButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getLanguageButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getGiniButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
    });

    getAreaButton.addEventListener('click', () => {
      searchCriteria = getAreaButton.textContent;
      getAreaButton.style.backgroundColor = 'rgba(255, 99, 71, 1)';
      getPopulationButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getRegionButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getNameButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getLanguageButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getGiniButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
    });

    getLanguageButton.addEventListener('click', () => {
      searchCriteria = getLanguageButton.textContent;
      getLanguageButton.style.backgroundColor = 'rgba(255, 99, 71, 1)';
      getPopulationButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getRegionButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getNameButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getAreaButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getGiniButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
    });

    getGiniButton.addEventListener('click', () => {
      searchCriteria = getGiniButton.textContent;
      getGiniButton.style.backgroundColor = 'rgba(255, 99, 71, 1)';
      getPopulationButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getRegionButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getNameButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getAreaButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getLanguageButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
    });

    getPopulationButton.addEventListener('click', () => {
      searchCriteria = getPopulationButton.textContent;
      getPopulationButton.style.backgroundColor = 'rgba(255, 99, 71, 1)';
      getGiniButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getRegionButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getNameButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getAreaButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
      getLanguageButton.style.backgroundColor = 'rgba(255, 99, 71, .72)';
    });

    // Main Search Event
    getMainSearchButton.addEventListener('input', (e) => {
      const userInput = (e.target.value);
      getMainList.innerHTML = '';

      if (searchCriteria === getNameButton.textContent) {
        getCountryByName(countryObj, userInput, 1);
        changeCriteriaHeading();
      } else if (searchCriteria === getGiniButton.textContent) {
        getCountryByGini(countryObj, userInput, 1);
        changeCriteriaHeading();
      } else if (searchCriteria === getPopulationButton.textContent) {
        getPopulationByCountry(countryObj, userInput, 1);
        changeCriteriaHeading();
      } else if (searchCriteria === getAreaButton.textContent) {
        getCountryByArea(countryObj, userInput, 1);
        changeCriteriaHeading();
      } else if (searchCriteria === getRegionButton.textContent) {
        console.log("Test1")
        getCountryByRegion(countryObj, userInput, 1);
        changeCriteriaHeading();
      } else {
        getLanguageByCountry(countryObj, userInput, 1);
        changeCriteriaHeading();
      }
    });
  }
  getCountryApi();
}
main();
