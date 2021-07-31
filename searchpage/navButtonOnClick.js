// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    navButtonOnClick(obj)
// Return:      undefined
// Description: This function creates a list of countries on the "nav-button"
//              on /countriescoupling/searchpage when clicked. It displays them A-Z.

function navButtnOnClick(obj) {
  // Sort Obj
  const sortedObj = sortCountriesNamesAlphabetically(obj, 1);

  // Create Elements Dynamically
  const getNavButtonDiv = document.createElement('div');
  const createList = document.createElement('ul');

  // Create refrence to buttons already created
  const getNavButton = document.getElementById('nav-button');
  const getNavDiv = document.getElementById('nav-div');

  // List Style
  createList.style.listStyle = 'none';
  createList.style.textAlign = 'left';

  // Setting Nav Button Div Style
  getNavButtonDiv.setAttribute('class', 'nav-class');
  getNavButtonDiv.style.left = '-1%';
  getNavButtonDiv.style.top = '65%';
  getNavButtonDiv.style.width = '20%';
  getNavButtonDiv.style.height = '1000px';
  getNavButtonDiv.style.transform = 'translate(0%, 0%)';
  getNavButtonDiv.style.background = 'tomato';
  getNavButtonDiv.style.overflow = 'auto';
  getNavButtonDiv.style.border = 'solid 1px black';
  getNavButtonDiv.style.borderRadius = '5px';

  getNavButton.addEventListener('click', () => {
    if (getNavDiv.contains(getNavButtonDiv)) {
      getNavDiv.removeChild(getNavButtonDiv);
    } else {
      getNavDiv.appendChild(getNavButtonDiv);
      getNavButtonDiv.appendChild(createList);

      sortedObj.forEach((item) => {
        const createListItem = document.createElement('li');
        const createLinkItem = document.createElement('a');
        createLinkItem.setAttribute('href', 'www.google.com');
        createLinkItem.textContent = `${item.name}`;
        createListItem.style.fontSize = '20px';

        // Apend Created Itemsn
        createListItem.appendChild(createLinkItem);
        createList.appendChild(createListItem);
      });
    }
  });
}
