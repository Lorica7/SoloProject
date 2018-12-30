
var webContext = ('../keys')
var googleSearch = ('../keys')

var apikey = webContext.api_key;

var key = googleSearch.googleKey;

var cseCode = googleSearch.cseCode;

let params;


//Retrieve Info, and Display

// Contextual Web
$(document).ready(function () {

    $.ajax({
        url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=petite+pants&count=25&autocorrect=false",
        headers: { "X-RapidAPI-Key": apikey },
        method: "GET"
    })
        .then(function (response, err) {
            console.log(response);

        })

    // Google Custom Search

    $.ajax({
        url: `https://www.googleapis.com/customsearch/v1?key= ${key} ?cx= ${cseCode} &q= ${params}`,
        method: "GET",
    }).then(function (response) {
        console.log(response); // 

    });

    // save response data  in var

    // $("button").on("click", function() {


});

// $.get("/api/all", function(data) {
//     for (var i = 0; i < data.length; i++) {

//       var wellSection = $("<div>");

//       wellSection.addClass("well");

//       wellSection.attr("id", "book-well-" + i);

//       $("#well-section").append(wellSection);

//       $("#clothes-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
//       $("#clothes-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
//       $("#clothes-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
//       $("#clothes-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
//     }
//   });
