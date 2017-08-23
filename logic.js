function printSearchData(responseData) {
    var rows = [];
    var i = 0;
    var table = document.getElementById("movie-table").getElementsByTagName('tbody')[0];
    responseData.forEach(function (element) {
        console.log(element.show);
        var j = 0;
        var tr = table.insertRow(i++);
        tr.id = "tr-" + j;
        var td = tr.insertCell(j++);
        td.id = "movie-name-" + i;
        td.innerText = element.show.name;
        td = tr.insertCell(j++);
        td.id = "movie-img-" + i;
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


var modal = document.getElementById('myModal');
var btn = document.getElementById("tr-0");
var span = document.getElementsByClassName("close")[0];
console.log('btn: ', btn);

setInterval(function () {

});
if (btn) {
    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}