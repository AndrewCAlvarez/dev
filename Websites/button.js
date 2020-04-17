
var button = document.getElementById("theButton");

function GetInfo ()
{
    var elm = document.createElement("div");
    elm.id = "card";

    var request = new XMLHttpRequest();
    request.open("GET","https://api.chucknorris.io/jokes/random")
    request.onload = function()
    {
        console.log(request.response);
        var body = JSON.parse(request.response);
        var elmContent = document.createTextNode(body.value);
        elm.appendChild(elmContent);
    }
    request.send();
    
    document.getElementById("cardContainer").appendChild(elm);
};

button.onclick = GetInfo;


