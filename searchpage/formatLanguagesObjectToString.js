// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    formatLanguageObjecToString()
// Return:      Returns a string
// Description: This function takes in an object that iterates its contents into a string
//                for better viewing.                          ]

function formatLanguagesObjectToString(langObj) {
  const languageString = [];

  for (const item of langObj) {
    languageString.push(` ${item.name}`);
  }

  return languageString.join(',');
}
module.exports = formatLanguagesObjectToString;
