// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    getCountryByArea()
// Return:      undefined
// Description: This function executes the DOM element changes to update in-case of a failed fetch
//              request from the API.

function updateOnApiError() {
  const getMainDiv = document.getElementById('main-div');
  const createParagraph = document.createElement('p');
  const getHeading = document.getElementById('search-criteria');
  getHeading.textContent = 'Error: No data to display.';
  createParagraph.textContent = 'Request to Server Failed - Please refresh your page or try again later. We are sorry about this and appreciate your patience.';
  createParagraph.style.margin = '0px';
  createParagraph.style.position = 'relative';
  createParagraph.style.textAlign = 'center';
  createParagraph.style.fontSize = '30px';
  getMainDiv.appendChild(createParagraph);
}
