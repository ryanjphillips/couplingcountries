// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    createCriteriaPanel()
// Return:      undefined
// Description: This function changes the heading (id = search criteria) to display the
//                amount of countries currently in the main-list

function changeCriteriaHeading() {
  let nodeLength = '250';
  const getMainList = document.getElementById('main-list');
  if (getMainList.childNodes !== null) {
    nodeLength = getMainList.childNodes.length;
    const getSearchCriteria = document.getElementById('search-criteria');
    getSearchCriteria.textContent = `Your search criteria resulted in ${nodeLength} countries!`;
  }
}
