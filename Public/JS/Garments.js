
$(document).ready(function () {

    $("#search").on("click", function (event) {
        event.preventDefault();
        console.log("Listener Works")

        const garments = $('#garmentSearch').val();
        const email = $('#emailSearch').val();
        const color = $('#colorSearch').val()
        const option = $('#optionSearch').val();
        console.log(color)
        const garSearch = (params) => {
            $.ajax({
                method: "POST",
                url: "/api/garments/search",
                data: {
                    "garments": garments,
                    "color": color,
                    "email": email,
                    "option": option
                }
            }).then(function (response, err) {
                console.log(response);
                console.log(email);


                for (var i = 0; i < response.length; i++) {
                   
                    const save = $(`<button>`).attr("class", `btn-info btn-sm`).attr("id", `saveGar${[i]}`).attr("type", "button").text("Save").attr("style", "width: 100px;")
                    const garmentImages = $(`<img class=items${[i]}>`).attr("src", response[i].pagemap.cse_thumbnail[0].src).attr("style", "display: block; margin-left: auto; margin-right: auto; clear: none;")
                    const garmentName = $(`<h1 id=gar-res${[i]}>`).attr("class", `items${[i]}`).text(response[i].title).attr("style", "text-align:center;")
                   
                    $("#clothes-results").append(save, garmentImages, garmentName,);
                    $(`#saveGar${[i]}`).on("click", function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        console.log("Yayyyyy!")
                    })
                }
                for (let i = 0; i < response.length; i++) {
                    const linkText = response[i].link
                    $(`#gar-res${[i]}`).wrapAll((`<a href= ${linkText} class=items${[i]} target="_blank" >Check It Out!</a>`))
                    $ (`.items${[i]}`).wrapAll(`<div class=groupItems${[i]} ${email} style=margin-top: 30px; margin-bottom: 30px;></div>`) 
                }
               
            }).catch((error) => {
                console.log(error);
            });
        }
        garSearch(garments);

        $('#emailSearch').val("");
        $('#colorSearch').val("");
        $('#optionSearch').val("");
        $('#garmentSearch').val("Choose...");

        // $(`#saveGar${[i]}`).on("click", function (event) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     console.log("Yayyyyy!")
    
        //    console.log( $('#gar-res0').text())
    
        //     // const newGar = {
        //     //     title: $('#gar-res0').text(),
        //     //     link: $('a.items0').attr("href").text(),
        //     //     image_link: $("img.items0").attr("src").text(),
        //     //     email: $("div.groupItems0").prop().text()
        //     // }
    
        //     //     console.log(newGar);
    
    
        // })


    });

});



