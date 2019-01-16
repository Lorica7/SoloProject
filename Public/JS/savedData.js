// $(document).ready(function () {

    $("#saveGar").on("click", function (event) {
        event.preventDefault();
        console.log("Listener Works")

        const newGar = {
            title: $('#gar-res0').text(),
            link: $('a.items0').attr("href").text(),
            image_link: $("img.items0").attr("src").text(),
            email: $("div.groupItems0").prop().text()
        }

            console.log(newGar);


    })
// });