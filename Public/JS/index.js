// var API = {
//     saveExample: function (example) {
//         return $.ajax({
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             type: "POST",
//             url: "api/examples",
//             data: JSON.stringify(example)
//         });
//     },
//     getGarments: function (allParams) {
        
//           app.get ("api/garments/search", allParams)
            
//         },
  
//     deleteExample: function (id) {
//         return $.ajax({
//             url: "api/examples/" + id,
//             type: "DELETE"
//         });
//     }
// };

// $(document).ready(function () {

//     $("#search").on("click", function (event) {
//         event.preventDefault();
//         console.log("Listener Works")

//         let allParams = {
//             params: $('#garmentSearch').val(),
//             params2: $('#sizeSearch').val(),
//             params3: $('#colorSearch').val()
//         }

        
//             API.getGarments(allParams)
//                 .then((response) => {
//                     var results = response.data;
//                     console.log(results)
//                     // for (var i = 0; i < results.length; i++) {


//                     //     var heroes = $("<div class=\"Hero-items\">");
//                     //     var heroImages = $("<img>").attr("src", response.hero[i].image)
//                     //     var heroName = $("<h1>").text(response.hero[i].name);

//                     //     $("#hero-div").append(heroes, heroImages, heroName);
//                     // }
//                 });
        

//     }
//     )

// });

