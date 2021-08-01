// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    gotToPageOnClick()
// Return:      undefined
// Description: Links the user to the page at searhpage/index.html

function goToPageOnClick() {
  const gettingStartedButton = document.getElementById('getting-started');
  gettingStartedButton.addEventListener('click', () => {
    window.location.assign('/code/countrycoupling/couplingcountries/searchpage/index.html');
  });
}
