
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
        console.log("Listener Works")

        const garments = $('#garmentSearch').val();
        const size = $('#sizeSearch').val();
        const color = $('#colorSearch').val()
        console.log(color)
        const garSearch = (params) => {
            $.ajax({
                method: "POST",
                url: "/api/garments/search",
                data: {
                    "garments": garments,
                    "color": color,
                    "size": size
                }
            }).then(function (response, err) {
            //    const  data = response.filter(function (item) {
            //         return item.pagemap.includes("cse_thumbnail");
            //    });
               console.log(response);
                for (var i = 0; i < response.length; i++) {

                    const items = $("<div class=groupItems>")
                     const garmentImages = $("<img>").attr("src", response[i].pagemap.cse_thumbnail[0].src)
                    const garmentName = $(`<h1 class=gar-res${[i]}>`).text(response[i].title);
                   
                $("#clothes-results").append(items, garmentImages, garmentName);
                }
                for (var i = 0; i < response.length; i++) {
                    const linkText = response[i].link
                    $(`.gar-res${[i]}`).wrap((`<a href= ${linkText}></a>`))
                }
              }).catch((error) =>{
               console.log(error);
              });
        }
        garSearch(garments);



    });



});



