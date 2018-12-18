import { webContext } from "../../keys";

var apikey = webContext.api_key;


$.ajax({
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=petite+pants&count=25&autocorrect=false",
 headers: {"X-RapidAPI-Key": apikey},
  method: "GET"
})
 .then(function (response, err) {
    console.log(response);
    
})

// headers: 
// "X-RapidAPI-Key: mGAXU1Kko8mshyhZM8KdxuDte8T9p1LAU1ojsn83DcrRQBAIFs",


// $.get("/api/all", function(data) {
//     // For each book that our server sends us back
//     for (var i = 0; i < data.length; i++) {
//       // Create a parent div to hold book data
//       var wellSection = $("<div>");
//       // Add a class to this div: 'well'
//       wellSection.addClass("well");
//       // Add an id to the well to mark which well it is
//       wellSection.attr("id", "book-well-" + i);
//       // Append the well to the well section
//       $("#well-section").append(wellSection);
  
//       // Now  we add our book data to the well we just placed on the page
//       $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
//       $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
//       $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
//       $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
//     }
//   });


