function updateTime () {
    let kyivElement = document.querySelector("#Kyiv");
  let kyivDateElement = kyivElement.querySelector(".date");
  let kyivTimeElement = kyivElement.querySelector(".time");
  let kyivTime = moment(). tz("Europe/Kyiv");

  kyivDateElement.innerHTML = moment(). format("MMMM Do YYYY");
  kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[</small>]");



  let chicagoElement = document.querySelector("#Chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = moment(). format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime,1000);