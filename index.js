setInterval(function() {

let kyivElement = document.querySelector("kyiv");
let kyivDateElement = kyivElement.querySelector(".date");
let kyivTimeElement = kyivElement.querySelector(".time")
let KyivTime = moment().tz("Europe/Kyiv");
kyivDateElement.innerHTML = KyivTime.format("MMMM Do YYYY SS")
kyivTimeElement.innerHTML =kyivTime.format('h:mm:ss [<small>]A[</small>]');

let chicagoElement = document.querySelector("chicago");
let chicagoDateElement = chicagoElement.querySelector(".date");
let chicagoTimeElement = chicagoElement.querySelector(".time")
let chicagoTime = moment().tz("America/Chicago");
chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY SS")
chicagoTimeElement.innerHTML =chicagoTime.format('h:mm:ss SS [<small>]A[</small>]');

}, 10000);