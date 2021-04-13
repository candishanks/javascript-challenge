// from data.js
var tableData = data;


// connecting app.js to the index.html
var tbody = d3.select("tbody");


// Initial table build
function buildTable(data) {

    // clears out previous data
    tbody.html("")

    // creating tables and adding data
    data.forEach((ufo_table) => {
        var row = tbody.append("tr");

        
        Object.entries(ufo_table).forEach(([key, value]) =>{
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

// Calling previous function
buildTable(tableData)

// Creating table for date-filtered data
function filterTable() {

    // holding input value
    var dateFilter = d3.select("#datetime").property("value");

    // Date filter
    var filteredData = tableData.filter(date => date.datetime === dateFilter);

    console.log(filteredData);

    // calling previous function with new data
    buildTable(filteredData);

}

// connecting filter button in the index.html file to this app.js file
d3.selectAll("#filter-btn").on("click", filterTable)
