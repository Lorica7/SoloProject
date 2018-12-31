
//Retrieve Info, and Display

// Contextual Web
$(document).ready(function () {

    // $.ajax({
    //     url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=petite+pants&count=25&autocorrect=false",
    //     headers: { "X-RapidAPI-Key": apikey },
    //     method: "GET"
    // })
    //     .then(function (response, err) {
    //         console.log(response);
    //     })

    // Google Custom Search

    $("#search").on("click", function (event) {
        event.preventDefault();

        var userSearch = (event) => {
            return $.ajax({
                headers: {
                    "Content-Type": "application/json"
                },
                type: "POST",
                url: "/search",
                data: JSON.stringify(heroes.json)
            }).then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $("<div class=\"animal-item\">");
                   
                    var heroes = $("<div class=\"Hero-items\">");
                    var heroImages = $("<img>").attr("src", response.hero[i].image)
                    var heroName = $("<h1>").text(response.hero[i].name);
                   
                    $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);

                }
            });



            }
        }



                // Handling returned objects






          



    // $("#search").on("click", function (event) {
    //     event.preventDefault();

    //     params = $('#garmentSearch').val(),
    //      params2 = $('#sizeSearch').val(),
    //      params3 = $('#colorSearch').val()

    //      app.get("api/dummy/:params1/:params2/:params3", function (req, res) {



    //     }).then(function (response) {
    //         console.log(response); // 
    //     });
    //     })  

    // });

    // app.get("api/search/:params1/:params2/:params3", function(req, res) {
    //     url: queryURL,
    //     method: "GET"
    //   })
    //     .then(function(response) {
    //       var results = response.data;



