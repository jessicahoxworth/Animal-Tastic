
var animals = ["dog", "cat", "iguana", "chinchilla", "corgi", "zebra", "otter", "penguin", "goose", "manatee", "unicorn"]
var animalSelected = "";
var newAnimalButton;


function createButtons() {

    $("#animalButtons").empty();


    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.text(animals[i]);
        a.addClass("animalButton");
        a.text(animals[i]);
        $("#animalButtons").append(a);


    }
}

createButtons();

$(".animalButton").on("click", function () {

    $("#animalsDiv").empty();


    animalSelected = $(this).text();



    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animalSelected + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=25";





    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;


        for (var i = 0; i < results.length; i++) {

            var stillImage = results[i].images.fixed_height.url;


            var animalDiv = $("<div>");

            animalDiv.addClass("col-sm-3")

            var animalCard = $("<div>")
            animalCard.addClass("card")

            var animalGif = $("<img>").attr("src", stillImage);
            animalGif.attr("data-still", results[i].images.fixed_height.url)
            animalGif.attr("data-animate", results[i].images.original.url)
            animalGif.attr("data-state", "still")
            animalGif.addClass("card-img-top");
            animalCard.append(animalGif);

            animalDiv.append(animalCard)
            $("#animalsDiv").append(animalDiv);



        }

    })

})




$("#newAnimalButton").on("click", function (event) {
    event.preventDefault();

    newAnimalButton = $("#userInput").val; {
        animals.push(newAnimalButton);

        createButtons();
    }
});








