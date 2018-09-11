var api = "https://ghibliapi.herokuapp.com/films"

$(document).ready(function(){
    $.getJSON(api, function(data){
        console.log(data[0]);
    });
});

