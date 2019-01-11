$(document).ready(function () {



    $("#signersIn").on("click", function (event) {
        event.preventDefault();
        console.log("Listening")

        let signersIn = {
            email: $("#emailSign").val().trim(),
            password: $("#passSign").val().trim(),
        };

        var getEmail = (data) => {
            $.ajax({
                method: "POST",
                url: "/api/user/:email",
                data: signersIn
            }).then(function (res) {
                console.log(res)
                const msgS = $("<h5 class=groupItems>").text("You successfully signed in")
                $("#signArea").append(msgS)
            }).catch((error) => {
                console.log(error);
                const msgF = $("<h5 class=groupItems>").text("Your email or password is incorrect")
                $("#signArea").append(msgF)
            });
            getEmail(signersIn);
            $("#emailSign").val("");
            $("#passSign").val("");
        };

    });

    $("#retrieveRes").on("click", (event) => {

        event.preventDefault();
        console.log("Listener Works")

        var getResults = () => {
            $.ajax({
                method: "POST",
                url: "/api/user/:email",
                data: signersIn
            }).then(function (res) {
                console.log(res)
                window.location.href = "/search";
                //res.render ???
            }).catch((error) => {
                console.log(error);
                const msg = $("<h5 class=groupItems>").text("Your email or password is incorrect")
                $("#signArea").append(msg)
            });
            getEmail(signersIn);


    })


})