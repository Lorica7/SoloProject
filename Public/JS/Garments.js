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

http://webservices.amazon.com/onca/xml?
// Service=AWSECommerceService&
// AWSAccessKeyId=[AWS Access Key ID]&
// AssociateTag=[Associate Tag]&
// Operation=ItemSearch&
// Condition=All&
// Availability=Available&
// SearchIndex=Apparel&
// Keywords=Shirt
// &Timestamp=[YYYY-MM-DDThh:mm:ssZ]
// &Signature=[Request Signature]



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


