function changeCriteriaHeading() {
  let nodeLength = '250';
  const getMainList = document.getElementById('main-list');
  if (getMainList.childNodes !== null) {
    nodeLength = getMainList.childNodes.length;
    const getSearchCriteria = document.getElementById('search-criteria');
    getSearchCriteria.textContent = `Your search criteria resulted in ${nodeLength} countries!`;
  }
}
