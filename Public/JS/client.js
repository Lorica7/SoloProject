
//     ***********************      Saving New Client  *************
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

    $.ajax({
      method: "POST",
      url: "/api/register",
      data: newUser
       })
      .then((res, err) => {
       
        $("#confirmModal").modal('show');
        console.log(newUser);
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#password").val("");
        $("#type").val("");
        const msg = $("<h5 class=groupItems>").text("");
        $("#errorMsg").append(msg)
      }).catch((err) => {
        $("#confirmModal").modal('hide');
        console.log(err);
        const msgError = $("<h5 class=groupItems>").text("Please make sure your email and password are formatted correctly.")
        $("#errorMsg").append(msgError)
      });
  })

  //     ***********************      UPDATE Client  *************

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
      }).then((results, error) => {
        console.log(results)
        const items = $(`<div class=userInfo>`)
        const email = $(`<h4>`).text(`Email:${updateUser.email}`)
        const fName = $(`<h4>`).text(`First Name:${updateUser.firstName}`)
        const lName = $(`<h4>`).text(`Last Name: ${updateUser.lastName}`)
        const size = $(`<h4>`).text(`Size Preference: ${updateUser.size}`)
        const type = $(`<h4>`).text(`Type Preference: ${updateUser.type}`)
        $("#updateInfo").append(items, email, fName, lName, size, type)
    }).catch((error) =>{
      console.log(error);
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
