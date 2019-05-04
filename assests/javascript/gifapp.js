var tvShows = ["Brooklyn 99", "The Office", "Arrested Devlopment","Parks and Recreation"];


$(document).ready(function(){
// create buttons out of array and display them
function renderButtons(){
    $("#new-buttons").empty();

    for(var i =0; i < tvShows.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("btn btn-primary show");
        newButton.attr("data-title",tvShows[i]);
        newButton.text(tvShows[i]);
        $("#new-buttons").append(newButton);
        $("#user-input").val("");
    }
}


//add new show to the array function
$("#add-show").on("click", function(event){
    event.preventDefault();

    var show = $("#user-input").val();

    tvShows.push(show);
    
    renderButtons();
})

//When you click on the button gifs will appear
$(document).on("click",".show", function(){
    
    var text= $(this).text();
    console.log(text);
 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+text+"&api_key=aaiq9TI68egGEfdJ0DjHxEodRxp1StpD";

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response){
        

        var result = response.data;

        for(var i =0; i< 10; i++){

            var gifDiv = $("<div>");

            gifDiv.addClass("gif-class");

            var image = $("<img>");

            image.attr("src",result[i].images.fixed_height.url);

            $(gifDiv).append(image);

            $("#gif-holder").prepend(gifDiv);
        }

        })
})

//clear all gifs
$("#clear").on("click", function(){
    $("#gif-holder").empty();
});


renderButtons();
});



