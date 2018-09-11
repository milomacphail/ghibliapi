var api = "https://ghibliapi.herokuapp.com/films"

$(document).ready(function(){
    $.getJSON(api, function(data){
        console.log(data[0]);
    });
});

const app = document.getElementById('main');

const logo = document.createElement('logo');

logo.src = 'logo.png';

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

