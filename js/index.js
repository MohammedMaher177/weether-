"use strict";
let inputSearch = document.querySelector("#search");
let cityName = document.querySelector("#city");
let weatherList = [];
let finalres;
async function getWeather(location) {
  let res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=a7c0c74465b141cba24203345231802&q=${location}&days=7&lang=all`
  );

  finalres = await res.json();
  console.log(finalres.forecast.forecastday[1].day);

  display();
}
let city = "cairo";
getWeather(city, "cairo");
inputSearch.addEventListener("input", () => {
  let city = "Molepos";
  getWeather(inputSearch.value);
});

function display() {
  const d = new Date();
  let cartona;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const da = new Date("July 21, 1983 01:15:00");
  let day = d.getDate();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthOfYear = month[d.getMonth()];
  let cartonaCity = `<h1 class="mb-2">${finalres.location.name}</h1>
                    <h2 class="mb-5">${finalres.location.region} ,
                    ${finalres.location.country}</h2>
                <h2 class="mb-2">${
                  finalres.forecast.forecastday[0].day.avgtemp_c
                }<sup>o</sup>c</h2>
                <h2 class="mb-5">${finalres.current.condition.text}</h2>
                <h3>${weekday[d.getDay()]}</h3>
                <h3 class="mb-5">${finalres.location.localtime}</h3>`;

  document.getElementById("city").innerHTML = cartonaCity;

  let cartonaDisplay = `<h2 class="mb-5">Hourly forecast of ${finalres.location.name}</h2>
                <div class=" text-center py-3 fs-3 d-flex
                    text-white-50 justify-content-around rounded-3">`;
  for (let i = 0; i < 7; i++) {
    cartonaDisplay += `<span class=" bg-opacity-75 bg-dark p-3 rounded-2 mx-2">${
      day + i
    } ${monthOfYear}<i></i><h5>${weekday[d.getDay() + i]}</h5><p>${
      finalres.forecast.forecastday[i].hour[i].condition.text
    }<img src="${finalres.forecast.forecastday[i].hour[i].condition.icon}">${
      finalres.forecast.forecastday[i].hour[i].temp_c
    }<sup>o</sup>c</p></span>`;
  }
  cartonaDisplay += `</div>`;
  document.getElementById("display").innerHTML = cartonaDisplay;
}
