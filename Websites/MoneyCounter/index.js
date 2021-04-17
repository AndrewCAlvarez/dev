let dollarAmount = 0.0;
let dollarRatePerHour = 33.0;
let dollarsPerSecond = dollarRatePerHour / (60 * 60);

window.setInterval(()=>
{
    let output = dollarAmount + dollarsPerSecond
    console.log( output.toPrecision(4));
    dollarAmount += dollarsPerSecond;
}, 1000)

function countMoney(){
    dollarAmount 
};