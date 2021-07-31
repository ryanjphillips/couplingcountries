// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    formatNumbersWithCommas()
// Return:      string
// Description: This function converts any number or string to a string with appropriate commas.

function formatNumberWithCommas(number) {
  let formattedNumb = number;
  if (formattedNumb === undefined || formattedNumb === null) {
    return '0';
  } if (typeof formattedNumb === 'string') {
    formattedNumb = formattedNumb.replace(/,/gi, '');
    formattedNumb = parseInt(formattedNumb, 10);
  }

  return formattedNumb.toLocaleString();
}

module.exports = formatNumberWithCommas;1
