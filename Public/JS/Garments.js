
// Contextual Web
$(document).ready(function () {

    $("#search").on("click", function (event) {
        event.preventDefault();
        console.log("Listener Works")

        const garments = $('#garmentSearch').val();
        const email = $('#emailSearch').val();
        const color = $('#colorSearch').val()
        console.log(color)
        const garSearch = (params) => {
            $.ajax({
                method: "POST",
                url: "/api/garments/search",
                data: {
                    "garments": garments,
                    "color": color,
                    "email" : email
                }
            }).then(function (response, err) {
                const email = $('#emailSearch').val();
               console.log(response);
                for (var i = 0; i < response.length; i++) {

                    const items = $(`<div class=groupItems id=${email}>`)
                     const garmentImages = $("<img>").attr("src", response[i].pagemap.cse_thumbnail[0].src)
                    const garmentName = $(`<h1 class=gar-res${[i]}>`).text(response[i].title);
                    const save = $("<button class=btn btn-info btn-sm id=saveGar>")
                $("#clothes-results").append(items, garmentImages, garmentName, save);
                }
                for (let i = 0; i < response.length; i++) {
                    const linkText = response[i].link
                    $(`.gar-res${[i]}`).wrap((`<a href= ${linkText}></a>`))
                }
              }).catch((error) =>{
               console.log(error);
              });
        }
        garSearch(garments);

        $('#emailSearch').val("");
        $('#colorSearch').val("");
        $('#garmentSearch').val("Choose...");

    });

});



