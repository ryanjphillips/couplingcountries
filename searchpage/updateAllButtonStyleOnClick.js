function updateAllButtonStyleOnClick(eventButton, ...allButtons) {
  document.getElementById(eventButton).style.backgroundColor = 'tomato';
  allButtons.forEach((item) => {
    document.getElementById(item).style.backgroundColor = 'rgba(255, 99, 71, .72)';
  });

  return (document.getElementById(eventButton)).textContent;
}
