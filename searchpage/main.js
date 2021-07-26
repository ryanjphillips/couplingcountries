// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    main()
// Returns:     undefined
// Description: Creation (main loop) of the website page countrycoupling.com/searchpage

function main(){
    
    async function getCountryApi(){
        const countryDaya = await fetch("https://restcountries.eu/rest/v2/all")
        const countryObj = await countryDaya.json();

        navButtnOnClick(countryObj);
    }

    getCountryApi();
}

main();