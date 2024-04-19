const apiKey = "a12af92c8fcff2009e79c5d80ed6c88f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weartherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json()
    document.querySelector(".city").innerHTML = city;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let result = data.weather[0].main;
    weartherIcon.src = `./images/${result}.png`;

}
searchbtn.addEventListener("click", () => {
    checkWeather(search.value);
});
