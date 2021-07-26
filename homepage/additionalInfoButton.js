function additionalInfoButton(){
    const scrollButton = document.getElementById("scroll-button");

    scrollButton.addEventListener('click', () => {
        window.scrollTo(0, 2000);
    })
}