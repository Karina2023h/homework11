function createTable(rows, cols) {
  const table = document.createElement("table");

  for (let i = 1; i <= rows; i++) {
    // const row = table.insertRow();
    const row = document.createElement("tr");
    for (let a = 1; a <= cols; a++) {
      // const cell = row.insertCell();
      const cell = document.createElement("td");
      cell.textContent = i * a;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  return table;
}

const parentElement = document.getElementById("multiplicationTable");

const multiTable = createTable(10, 10);
parentElement.appendChild(multiTable);
