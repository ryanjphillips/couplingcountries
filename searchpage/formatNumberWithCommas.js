function formatNumberWithCommas(number) {
  let formattedNumb = number;
  if (formattedNumb === undefined || formattedNumb === null) {
    return '0';
  } if (typeof formattedNumb === 'string') {
    formattedNumb = formattedNumb.replace(/,/gi, '');
    formattedNumb = parseInt(formattedNumb, 10);
  }

  return formattedNumb.toLocaleString();
}

module.exports = formatNumberWithCommas;1
