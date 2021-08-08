let nav = document.getElementById("nav");
let spotlight = document.getElementById("spotlight");
document.addEventListener("mousemove", function () {
  spotlight.style.left = event.pageX + "px";
  spotlight.style.top = event.pageY + "px";
});

document.addEventListener("mousemove", function () {
  document.getElementById("xPos").innerText = event.pageX + "px";
});
