function createCountryPanel(countryImage, countryName, countryPopulation, countryLanguages, countryCapital){

    // Create Elements
    const listItem = document.createElement("li");
    const listImg = document.createElement("img");
    const listCountryName = document.createElement("p");
    const listCapitalName = document.createElement("p");
    const listPopulationName = document.createElement("p");
    const listLanguagesName = document.createElement("p");
    const getUnorderedList = document.getElementById("main-list");
    

    // Adding Content to tags
    listImg.setAttribute("src", countryImage);
    listCountryName.textContent = `${countryCapital}`
    listCapitalName.textContent = ` Capital: ${countryCapital}`;
    listCountryName.textContent = `${countryName}`;
    listPopulationName.textContent = ` Population: ${countryPopulation}`;
    listLanguagesName.textContent = ` Languages: ${countryLanguages}`;

    listImg.style.width = "50%";
    listImg.style.height = "40%";
    listImg.style.position = "relative";
    listImg.style.top = "5%"
    listImg.style.border = "solid black 1px";

    listCountryName.style.color = "tomato";
    listCountryName.style.fontSize = "20px"


    listItem.appendChild(listImg);
    listItem.appendChild(listCountryName);
    listItem.appendChild(listCapitalName);
    listItem.appendChild(listLanguagesName);
    listItem.appendChild(listPopulationName);


    listItem.style.overflow = "auto";
    listItem.style.height = "300px";
    listItem.style.width = "300px";
    listItem.style.backgroundColor = "white";
    listItem.style.border = "tomato solid 1px";
    listItem.style.display = "inline-block";
    listItem.style.margin = "30px";

    getUnorderedList.appendChild(listItem);
}