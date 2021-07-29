function formatNumberWithCommas(number) {
  let formattedNumb = number;
  if (formattedNumb === undefined) {
    return 'Number Is Undefined';
  } if (typeof formattedNumb === 'string') {
    formattedNumb = formattedNumb.replace(/,/gi, '');
    formattedNumb = parseInt(formattedNumb, 10);
  }

  return formattedNumb.toLocaleString();
}

module.exports = formatNumberWithCommas;
