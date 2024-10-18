var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortdesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var value = document.querySelector(".value");
var time = document.querySelector(".time");
var content = document.querySelector(".content");

async function changWeather() {
  let capitalSearch = search.value.trim();
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=5dc7209046fc077f3fffece01aa87b02`;

  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    content.classList.remove("hide");
    city.innerHTML = data.name;
    country.innerHTML = data.sys.country;
    visibility.innerHTML = data.visibility + "m";
    wind.innerHTML = data.wind.speed + "km/h";
    sun.innerHTML = data.main.humidity + "%";
    value.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    shortdesc.innerHTML = data.weather[0].main;
    time.innerHTML = new Date().toLocaleString("vi");
  } else {
    content.classList.add("hide");
  }
}

changWeather();
search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    changWeather();
  }
});
