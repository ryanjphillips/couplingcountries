// Authour:     Ryan Phillips
// Date:        08/1/2021
// Function:    createTable()
// Return:      undefined
// Description: This function creates and displays a table based on given criteria.

function createTable(obj, column, properties, percentage) {
  const table = document.getElementById('figure-table');
  const tableHeading = document.getElementById('graph-heading');
  table.style.textAlign = 'center';
  table.style.fontSize = '20px';
  table.style.position = 'relative';
  table.style.left = '15%';
  table.style.border = 'solid black 1px';
  table.style.borderRadius = '2px';
  table.style.padding = '50px';
  table.style.color = 'tomato';
  table.style.fontWeight = 'bold';
  table.style.webkitTextStrokeWidth = '.5px';
  table.style.webkitTextStrokeColor = 'black';
  table.style.borderBottom = 'none';
  table.style.borderTop = 'none';

  tableHeading.textContent = `Countries Graph (Sorted by ${properties})`;
  table.style.fontFamily = 'Cambria, Cochin, Georgia, Times, Times New Roman, serif';
  const newRow = document.createElement('tr');

  for (let x = 0; x < column; x += 1) {
    const newColumn = document.createElement('td');

    if (x === 0) {
      newColumn.textContent = obj.name;
      newColumn.style.borderRight = 'black solid 1px';
      newColumn.style.overflow = 'auto';
      newColumn.style.height = '125px';
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
      newDiv.style.height = '100px';
      newDiv.style.borderRadius = '10px';
      newDiv.style.border = 'black solid 1px';
      newDiv.style.textAlign = 'right';
      newDiv.style.fontSize = '13px';
      newColumn.appendChild(newDiv);
    }

    if (x === 2) {
      newColumn.textContent = formatNumberWithCommas(obj[properties]);
      newColumn.style.borderLeft = 'black solid 1px';
      newColumn.style.height = '125px';
      newColumn.style.width = '100px';
      newColumn.style.borderBottom = 'black solid 1px';
    }
    newRow.appendChild(newColumn);
  }
  table.appendChild(newRow);
}
