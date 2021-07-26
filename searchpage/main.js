function main(){
    async function getCountyApi(){
        const countryDaya = await fetch("https://restcountries.eu/rest/v2/all")
        const countryObj = await countryDaya.json();

        navButtnOnClick(countryObj);
    }

    getCountyApi();
}