
var button = document.getElementById("theButton");
button.onclick = () => 
{
    var elm = document.createElement("div");
    elm.id = "card";
    var elmContent = document.createTextNode('Hey there');
    elm.appendChild(elmContent);
    document.getElementById("cardContainer").appendChild(elm);

}