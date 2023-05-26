const citis = document.querySelector(".citis")

const weather = {}
const kelvin = 273
const key = "615a54f7c5323eb352ecd9bb395b69a6"

function getWeather() {
  let api = `http://api.openweathermap.org/data/2.5/weather?q=Yazd&appid=${key}`

  const request = new XMLHttpRequest()
  request.open("GET", api)
  request.send()

  request.addEventListener("load", () => {
    const data = JSON.parse(request.responseText)
    weather.tempreture = Math.floor(data.main.temp - kelvin)
    weather.iconId = data.weather[0].icon
    weather.city = data.name
    weather.country = data.sys.country

    displayWeather()
  })
}

function displayWeather() {
  let teplate = `<div class="container">
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

  citis.innerHTML = teplate
}

getWeather()
