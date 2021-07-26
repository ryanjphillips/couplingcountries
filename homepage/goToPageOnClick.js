function goToPageOnClick(){
    const gettingStartedButton = document.getElementById("getting-started");

    gettingStartedButton.addEventListener('click', () => {
        window.location.assign("/home/ys/code/countrycoupling/searchpage/index.html");
    })
}