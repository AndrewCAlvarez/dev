let numRainDrops = 100;
let rainDrops = [
  {
    fallDist: 0 + "vh",
    rainDrop,
  },
];
for (let i = 0; i < numRainDrops; i++) {
  let rainDropElm = document.createElement("div");
  rainDropElm.style.width = "2px";
  rainDropElm.style.height = "30px";
  rainDropElm.style.backgroundColor = "purple";
  rainDropElm.style.position = "absolute";
  rainDropElm.style.left = i * 7 + "px";
  rainDropElm.style.top = 0 + "px";
  rainDropElm.id = "rainDropElm" + i;
  rainDropElm.fallDist = 0 + "vh";
  document.body.appendChild(rainDropElm);
  rainDrops.push(rainDropElm);
}

let myvar = window.setInterval(letItRain, 500);

function letItRain() {
  let rainDrop = document.getElementById("rainDropElm0");

  rainDrop.fallDist = fallDist + "vh";
  console.log(rainDrop.fallDist);
  if (rainDrop.fallDist == 100 + "vh") {
    rainDrop.fallDist = 0 + "vh";
  }
}

console.log("Done.");
