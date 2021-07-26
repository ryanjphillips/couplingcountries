// Authour:     Ryan Phillips
// Data:        07/26/2021
// function:    sortCountriesAlphabetically
// Description: This function takes in an object and boolean and sorts the boolean A-Z if order is 1 or Z-A if order is 0.

function sortCountriesNamesAlphabetically(object, order){

    if(order){
        const sortedObj = object.sort((a,b) => {

            if ((a.name).toUpperCase() < (b.name).toUpperCase()){

                return -1;
            }

            return 1; 
        })
    }else{
        const sortedObj = object.sort((a,b) => {

            if ((a.name).toUpperCase() > (b.name).toUpperCase()){

                return -1;
            }

            return 1; 
        })
    }

    return sortedObj;
}

module.exports = sortCountriesNamesAlphabetically;