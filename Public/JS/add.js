
$("#createUser").on("click", function(event) {
    event.preventDefault();
  
    var newUser = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      type: $("#type").val().trim()
    };
  
    $.post("/api/register", newUser)

      .then(function(data) {
       console.log(newUser);
        console.log(data);
      });
  
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
  
    $("#type").val(""); 

});