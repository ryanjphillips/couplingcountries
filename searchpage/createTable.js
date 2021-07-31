function createTable(obj, column, properties, percentage) {
  const table = document.getElementById('figure-table');
  table.style.textAlign = 'center';
  table.style.fontSize = '25px';
  table.style.width = '100%';
  table.style.height = '100%';
  table.style.fontFamily = 'Cambria, Cochin, Georgia, Times, Times New Roman, serif';
  const newRow = document.createElement('tr');

  for (let x = 0; x < column; x += 1) {
    const newColumn = document.createElement('td');

    if (x === 0) {
      newColumn.textContent = obj.name;
      newColumn.style.borderRight = 'black solid 1px';
      newColumn.style.overflow = 'auto';
      newColumn.style.height = '200px';
      newColumn.style.width = '100px';
      newColumn.style.borderBottom = 'black solid 1px';
    }
    // Middle Column
    if (x === 1) {
      const columnWidth = (obj[properties] / percentage) * 100;
      newColumn.style.width = '1000px';
      newColumn.style.maxHeight = '100px';
      newColumn.textContent = '';
      newColumn.style.backgroundColor = 'lightgray';

      // Div inside row
      const newDiv = document.createElement('div');
      newDiv.style.backgroundColor = 'rgba(255, 99, 71, 1)';
      newDiv.style.width = `${columnWidth}%`;
      newDiv.style.height = '175px';
      newDiv.style.borderRadius = '10px';
      newDiv.style.border = 'black solid 1px';
      newDiv.style.textAlign = 'right';
      newDiv.style.fontSize = '13px';
      newColumn.appendChild(newDiv);
    }

    if (x === 2) {
      newColumn.textContent = formatNumberWithCommas(obj[properties]);
      newColumn.style.borderLeft = 'black solid 1px';
      newColumn.style.height = '200px';
      newColumn.style.width = '100px';
      newColumn.style.borderBottom = 'black solid 1px';
    }
    newRow.appendChild(newColumn);
  }
  table.appendChild(newRow);
}
