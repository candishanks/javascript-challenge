// from data.js
var tableData = data;


//
var tbody = d3.select("tbody");

function buildTable(data) {

    // clears out previous data
    tbody.html("")


    data.forEach((ufo_table) => {
        var row = tbody.append("tr");

        // 
        Object.entries(ufo_table).forEach(([key, value]) =>{
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

buildTable(tableData)

function filterTable() {
    // holding input value
    var dateFilter = d3.select("#datetime").property("value");

    var filteredData = tableData.filter(date => date.datetime === dateFilter);

    console.log(filteredData);

    buildTable(filteredData);

}


d3.selectAll("#filter-btn").on("click", filterTable)
