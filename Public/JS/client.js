
//Saving Client and Saving Garments
$(document).ready(function () {

  $("#createUser").on("click", function (event) {
    event.preventDefault();

    var newUser = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      type: $("#type").val().trim()
    };

    $.post("/api/register", newUser)
      .then(function (data) {
        $("#confirmModal").modal('show');
        console.log(newUser);
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#password").val("");
        $("#type").val("");
        const msg = $("<h5 class=groupItems>").text("");
        $("#errorMsg").append(msg)
      }).catch((error) => {
        $("#confirmModal").modal('hide');
        console.log(error);
        const msgError = $("<h5 class=groupItems>").text("Please make sure your email and password are formatted correctly")
        $("#errorMsg").append(msgError)
      });
  })

  $("#updateUser").on("click", function (event) {
    event.preventDefault();
    console.log("Hi, listener works")


    var updateUser = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      passwordNew: $("#passwordNew").val().trim(),
      passwordOld: $("#passwordOld").val().trim(),
      size: $("#size").val(),
      type: $("#type").val()
    };

    var updateFunc = (updateUser) => {
      $.ajax({
        method: "PUT",
        url: "/api/update",
        data: updateUser
      }).then((res, err) => {
        console.log(res)
        const items = $(`<div class=userInfo>`)
        const email = $(`<h4>`).text(updateUser.email)
        const fName = $(`<h4>`).text(updateUser.firstName)
        const lName = $(`<h4>`).text(updateUser.lastName)
        const size = $(`<h4>`).text(updateUser.size)
        const type = $(`<h4>`).text(updateUser.type)
        $("#updateInfo").append(items, email, fName, lName, size, type)
    }).catch((err) =>{
      console.log(err);
     });
  }
    updateFunc(updateUser);

    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#passwordNew").val("");
    $("#passwordOld").val("");
    $("#passwordConf").val("");
    $("#size").val("");
    $("#type").val("");
  });


})
