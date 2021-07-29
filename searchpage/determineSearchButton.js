function determineSearchButton(button) {
  const allButtonClasses = document.getElementsByClassName('sort-critera');
  const newArray = [allButtonClasses[0], allButtonClasses[1], allButtonClasses[2], allButtonClasses[3], allButtonClasses[4],allButtonClasses[5]];
  newArray.forEach((item) => {
    if (item.textContent !== button.textContent) {
      item.style.backgroundColor = 'rgba(255, 99, 71, .72)';
    } else {
      item.style.backgroundColor = 'tomato';
    }
  });
}
