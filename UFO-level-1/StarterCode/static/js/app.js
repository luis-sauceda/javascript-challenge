// from data.js
var tableData = data;
console.log(data);

var tbody = d3.select("tbody");

data.forEach((ufoSight) => {
    var row = tbody.append("tr");
    Object.entries(ufoSight).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

  
var button = d3.select("#filter-btn");

function handleClick() {
    var inputField = d3.select("#datetime");

    var date = inputField.property("value");
    console.log(d3.event.target);
    console.log(date);

    var filteredData = data.filter(sight => sight.datetime === date);

    console.log(filteredData);
    var bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]; 
    bodyRef.innerHTML = '';

    filteredData.forEach((ufo_filtered) => {
        var row = tbody.append("tr");
        Object.entries(ufo_filtered).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });    
}
button.on("click", handleClick);
