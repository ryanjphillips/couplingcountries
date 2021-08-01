// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    getCountryByArea()
// Return:      string
// Description: This function creates the diming effect for the search criteria buttons thus returns
//              which button is currently "active".

function updateAllButtonStyleOnClick(eventButton, ...allButtons) {
  document.getElementById(eventButton).style.backgroundColor = 'tomato';
  allButtons.forEach((item) => {
    document.getElementById(item).style.backgroundColor = 'rgba(255, 99, 71, .72)';
  });

  return (document.getElementById(eventButton)).textContent;
}
