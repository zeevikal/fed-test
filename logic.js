function printSearchData(responseData) {
    var rows = [];
    var i = 0;
    var table = document.getElementById("movie-table").getElementsByTagName('tbody')[0];
    responseData.forEach(function (element) {
        console.log(element.show);
        var j = 0;
        var tr = table.insertRow(i++);
        var td = tr.insertCell(j++);
        td.innerText = element.show.name;
        td = tr.insertCell(j++);
        if (element.show.image) {
            var img = document.createElement('img');
            img.src = element.show.image.medium;
            td.appendChild(img);
        }
        else {
            td.innerText = "no image";
        }
    });
}


document.getElementById("search-button").addEventListener("click", function () {
    var queryStr = document.getElementById("search-input").value;

    $.ajax({
        "url": "http://api.tvmaze.com/search/shows?q=" + queryStr,
        "cache": true,
        "success": function (response) {
            if (response.length > 0) {
                printSearchData(response);
            }
            else {
                console.log("no data");
            }
        }
    });
});