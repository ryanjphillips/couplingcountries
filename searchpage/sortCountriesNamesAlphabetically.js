// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    sortCountriesAlphabetically()
// Return:      Returns a object
// Description: This function takes in an object and boolean and sorts the boolean A-Z if order is 1 or Z-A if order is 0.

function sortCountriesNamesAlphabetically(object, order){

    if(order){
            object.sort((a,b) => {

            if ((a.name).toUpperCase() < (b.name).toUpperCase()){

                return -1;
            }

            return 1; 
        })

    }else{
            object.sort((a,b) => {

            if ((a.name).toUpperCase() > (b.name).toUpperCase()){

                return -1;
            }

            return 1; 
        })
    }

    return object;
}

//module.exports = sortCountriesNamesAlphabetically;