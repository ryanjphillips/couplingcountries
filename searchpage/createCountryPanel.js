// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    createCountryPanel()
// Return:      undefined
// Description: This function dynamically creates HTML elements that will
//              displayed the search page's country results.

function createCountryPanel(
  countryImage,
  countryName,
  countryPopulation,
  countryLanguages,
  countryCapital,
  countryArea,
  countryRegion,
) {
  // Create Elements
  const listItem = document.createElement('li');
  const listImg = document.createElement('img');
  const listCountryName = document.createElement('p');
  const listCapitalName = document.createElement('p');
  const listPopulationName = document.createElement('p');
  const listLanguagesName = document.createElement('p');
  const listAreaName = document.createElement('p');
  const listRegionName = document.createElement('p');
  const getUnorderedList = document.getElementById('main-list');

  // Adding Content to tags
  listImg.setAttribute('src', countryImage);
  listCountryName.textContent = `${countryCapital}`;
  listCapitalName.textContent = ` Capital: ${countryCapital}`;
  listCountryName.textContent = `${countryName}`;
  listPopulationName.textContent = ` Population: ${formatNumberWithCommas(countryPopulation)}`;
  listLanguagesName.textContent = ` Languages: ${formatLanguagesObjectToString(countryLanguages)}`;
  listAreaName.textContent = ` Area: ${formatNumberWithCommas(countryArea)}`;
  listRegionName.textContent = ` Region: ${countryRegion}`;

  listImg.style.width = '60%';
  listImg.style.height = '35%';
  listImg.style.position = 'relative';
  listImg.style.top = '5%';
  listImg.style.border = 'solid black 1px';
  listImg.style.backgroundColor = 'gray';
  listImg.style.backgroundPosition = 'center';

  listCountryName.style.color = 'tomato';
  listCountryName.style.fontSize = '20px';

  listItem.appendChild(listImg);
  listItem.appendChild(listCountryName);
  listItem.appendChild(listCapitalName);
  listItem.appendChild(listLanguagesName);
  listItem.appendChild(listPopulationName);
  listItem.appendChild(listAreaName);
  listItem.appendChild(listRegionName);

  listItem.style.overflow = 'auto';
  listItem.style.height = '425px';
  listItem.style.width = '300px';
  listItem.style.backgroundColor = 'white';
  listItem.style.border = 'tomato solid 1px';
  listItem.style.display = 'inline-block';
  listItem.style.margin = '30px';

  getUnorderedList.appendChild(listItem);
}

module.exports = createCountryPanel;
