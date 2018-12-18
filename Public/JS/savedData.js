


$("#updateUser").on("click", function(event) {
    event.preventDefault();
  console.log("Hi, listener works")
   
   
    var updateUser = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      password: $("#passwordNew").val().trim(),
      size: $("#size").val().trim(),
      type: $("#type").val().trim()
    };
  
    
      function update (updateUser) {
        $.ajax({
          method: "PUT",
          url: "/api/update",
          data: updateUser
        }).then(console.log(updateUser));
      }
    
      update(updateUser);
 
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#passwordNew").val("");
    $("#passwordOld").val("");
    $("#passwordConf").val("");
    $("#size").val("");
    $("#type").val("");

  });