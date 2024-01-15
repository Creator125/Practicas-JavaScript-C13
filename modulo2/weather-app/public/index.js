const { response } = require("express");

document.addEventListener("DOMContentLoaded", () => {
    const weatherContainer = document.getElementById("container");
    const weatherForm = document.getElementById("weatherForm");

    weatherForm.addEventListener("submit", async () => {
        event.preventDefault();

        const weatherCity = document.getElementById("weatherCity").value;

        if (weatherCity.length > 0) {
            await reqWeatherInfo(weatherCity);
        }
    });
});

async function reqWeatherInfo(weatherCity){
    const data = await fetch(`http://localhost:3100/weather/${weatherCity}`, {
        method: "GET"
    });

    console.log(data);
    const result = await response.json();
}

async function createWeatherInfo(){
    const weatherContainer = document.getElementById("container");
    weatherContainer.innerHTML = `
        <span>Temperatura: </span><p>${result.main.temp}</p>
        <span>Humedad: </span><p>${result.main.humidity}</p>`
}