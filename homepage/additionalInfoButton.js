// Authour:     Ryan Phillips
// Date:        07/26/2021
// Function:    additionalInfoButtons()
// Return:      undefined
// Description: Scrolls user's screen to the footer of the home page located at /homepage/index.html

function additionalInfoButton() {
  const scrollButton = document.getElementById('scroll-button');

  scrollButton.addEventListener('click', () => {
    window.scrollTo(0, 2000);
  });
}
