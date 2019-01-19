
$(document).ready(function () {

    // ***************        Searching with custom Google Search    *************///
    // *************** Almost nothing was publicly available for  clothing searches. APIs had applications, price tags, or required that you be a business partner. *************///////
// ************ Google CSE represents what I would like to be able to do, with access to APIs from multiple brands. Currently, the search engine alone does not return specific enough results
  
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
                console.log(garments)

                for (var i = 0; i < response.length; i++) {

                    const save = $(`<button>`).attr("class", `btn-info btn-sm`).attr("id", `saveGar${[i]}`).attr("type", "button").text("Save").attr("style", "width: 100px;")
                    const garmentImages = $(`<img class=items${[i]}>`).attr("src", response[i].pagemap.cse_thumbnail[0].src).attr("style", "display: block; margin-left: auto; margin-right: auto; clear: none;")
                    const garmentName = $(`<h1 id=gar-res${[i]}>`).attr("class", `items${[i]}`).text(response[i].title).attr("style", "text-align:center;")

                    $("#clothes-results").append(save, garmentImages, garmentName);

                }
                for (let i = 0; i < response.length; i++) {
                    const linkText = response[i].link
                    $(`#gar-res${[i]}`).wrapAll((`<a href= ${linkText} class=items${[i]} target="_blank" >Check It Out!</a>`))
                    $(`.items${[i]}`).wrapAll(`<div class=groupItems${[i]} ${email} style=margin-top: 30px; margin-bottom: 30px;></div>`)

                    // Event Handler //
                    //               //
                    $(`#saveGar${[i]}`).on("click", function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        console.log("Yayyyyy!")
                       

                        const gTitle = response[i].title
                        const gImage = response[i].pagemap.cse_thumbnail[0].src
                        const gEmail = email
                        const type = garments
                        

                        gatherInfo(gTitle, linkText, gImage, gEmail, type);
                    })
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

///////////// *******      Saving a Result to DB ***********   //////////////

        function gatherInfo(gTitle, linkText, gImage, gEmail, type) {

            const dbObj = {
                title: gTitle,
                link: linkText,
                image_link: gImage,
                email: gEmail,
                type: type
            }
            const garSave = (params) => {
                $.ajax({
                    method: "POST",
                    url: "/api/garments/save",
                    data: dbObj
                }).then(function (response, err) {
                    console.log(response);
                    console.log("Successfully Saved")
                    const msg = $(`<p>`).text(`Item(s) have been saved.`);
                    $('#confirmSave').append(msg);
                    alert("You're item has been saved.")
                }).catch((err) => {
                    console.log(err);
                })

            };
            garSave(dbObj);
        };
    });

    ////////////// ***************   Pulling Saved Results from DB **************////////

    $("#savedResults").on("click", function (event) {
        event.preventDefault();
        console.log("Basics are working....")
        

        var email = $("#emailRes").val().trim();
        const getResults = (email) => {
            $.ajax({
                method: "GET",
                url: "/api/garments/" + email

            }).then((res, error) => {
                 console.log(res);

                   for (var i = 0; i < res.length; i++) {

                    const rTitle = $(`<h3 id=itemTitle${[i]}>`).text(res[i].title)
                    const rImage = $("<img/>").attr("src", res[i].image_link)
                    const rLink = $("<p>").text(res[i].link)
                    const rType = $("<h4>").text(res[i].type)

                    $("#attachResults").append(rTitle, rImage, rLink, rType);
                }
             
            }).catch((error) => {
                console.log(error);
            })
        };
        getResults(email);
       

    });

});



  
