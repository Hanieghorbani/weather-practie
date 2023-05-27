const citis = document.querySelector(".citis")
const kelvin = 273
const key = "615a54f7c5323eb352ecd9bb395b69a6"

async function getWeather(city) {
  let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

  const response = await fetch(api)
  const data = await response.json()
  displayWeather(data)

  /*
  fetch(api)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      displayWeather(data)
    })
    */
}

let teplate = ``
function displayWeather(data) {
  const weather = {}
  weather.tempreture = Math.floor(data.main.temp - kelvin)
  weather.iconId = data.weather[0].icon
  weather.city = data.name
  weather.country = data.sys.country

  teplate = `<div class="container">
<div class="app-title">
  <p>Weather</p>
</div>
<div class="weather-container">
  <div class="weather-icon">
    <img src="icons/${weather.iconId}.png" alt="" />
  </div>
  <div class="temperature-value">
    <p>${weather.tempreture} °<span>C</span></p>
  </div>
  <div class="location">
    <p>${weather.city}, ${weather.country}</p>
  </div>
</div>
</div>`

  citis.insertAdjacentHTML("beforeend", teplate)
}

getWeather("Tehran")
