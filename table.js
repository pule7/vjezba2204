var tableBegin = "<table><thead><tr><th>Ime<th>Prezime</th></tr></thead><tbody>";
var tableEnd = "</tbody></table>";

var rowBegin = "<tr>";
var rowEnd = "</tr>";

var rowData = "";
var row = "";

for(var i = 1; i <= 200; i++){
    row += rowBegin;
    rowData = "<td>ime" + i + "</td><td>prezime" + i  + "</td>";
    row += rowData;
    row += rowEnd;
}

document.write(tableBegin + row + tableEnd);

