function updateTime() {
    let chicagoElement = document.querySelector("#chicago");
    if (chicagoElement) {
        let chicagoDateElement = chicagoElement.querySelector(".date");
        let chicagoTimeElement = chicagoElement.querySelector(".time");
        let chicagoTime = moment().tz("America/Chicago");

        chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
        chicagoTimeElement.innerHTML = chicagoTime.format("h:mm:ss [<small>]A[</small>]");
    }

    let kievElement = document.querySelector("#kiev");
    if (kievElement) {
        let kievDateElement = kievElement.querySelector(".date");
        let kievTimeElement = kievElement.querySelector(".time");
        let kievTime = moment().tz("Europe/Kiev");

        kievDateElement.innerHTML = kievTime.format("MMMM Do YYYY");
        kievTimeElement.innerHTML = kievTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

let citiesSelectElement = document.querySelector("#citiesSelect");
citiesSelectElement.addEventListener("change", updateTime);

updateTime();
setInterval(updateTime, 1000);