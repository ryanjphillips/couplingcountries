function navButtnOnClick(obj){

    const sortedObj = sortCountriesAplha(obj);

    const getNavButton = document.getElementById("nav-button");
    const getNavDiv = document.getElementById("nav-div");
    const getNavButtonDiv = document.createElement("div");
    const createList = document.createElement('ul');

    //List Style
    createList.style.listStyle = "none";
    createList.style.textAlign = "left";

    // Setting Nav Button Div Style
    getNavButtonDiv.setAttribute("class", "nav-class");
    getNavButtonDiv.style.left = "-1%";
    getNavButtonDiv.style.top = "65%";
    getNavButtonDiv.style.width = "20%";
    getNavButtonDiv.style.height = "1000px";
    getNavButtonDiv.style.transform = "translate(0%, 0%)"
    getNavButtonDiv.style.background = "tomato";
    getNavButtonDiv.style.overflow = "auto";
    getNavButtonDiv.style.border = "solid 1px black";
    getNavButtonDiv.style.borderRadius = "5px";
    
    getNavButton.addEventListener("click", () => {

        if (getNavDiv.contains(getNavButtonDiv)){

            getNavDiv.removeChild(getNavButtonDiv);

        }
        else{

            getNavDiv.appendChild(getNavButtonDiv);
            getNavButtonDiv.appendChild(createList);

            for (const country of sortedObj){

                const createListItem = document.createElement("li");
                const createLinkItem = document.createElement("a");
                createLinkItem.setAttribute("href", "www.google.com");
                createLinkItem.textContent = `${country.name}`;
                createListItem.style.fontSize = "20px";
                createListItem.appendChild(createLinkItem);
                createList.appendChild(createListItem);
            }
        }
    
    });
}