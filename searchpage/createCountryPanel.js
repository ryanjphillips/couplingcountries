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
  const imgDiv = document.createElement('div');
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

  imgDiv.style.backgroundColor = 'white';
  imgDiv.style.position = 'relative';
  imgDiv.style.margin = '0px';
  imgDiv.style.padding = '0px';
  imgDiv.style.height = '150px';
  imgDiv.style.width = '200px';

  listImg.style.width = 'auto';
  listImg.style.height = 'auto';
  listImg.style.maxWidth = '200px';
  listImg.style.maxHeight = '200px';
  listImg.style.position = 'relative';
  listImg.style.border = 'solid black 1px';
  listImg.style.backgroundColor = 'gray';
  listImg.style.backgroundPosition = 'center';
  listImg.style.position = 'absolute';
  listImg.style.top = '10%';
  listImg.style.left = '25%';

  listCountryName.style.color = 'tomato';
  listCountryName.style.fontSize = '20px';
  listCountryName.style.fontWeight = 'bold';

  imgDiv.appendChild(listImg);
  listItem.appendChild(imgDiv);
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
  listItem.style.border = 'black solid 1px';
  listItem.style.display = 'inline-block';
  listItem.style.margin = '30px';
  listItem.style.borderRadius = '10px';

  getUnorderedList.appendChild(listItem);
}

module.exports = createCountryPanel;
