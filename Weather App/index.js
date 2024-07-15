const apiKey = "5387605e3740d3e3224e3849bf474555";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

if (searchBtn) {
    console.log('loaded');
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        return;
    }

    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind-speed").innerHTML = `${data.wind.speed} km/h`;

    switch(data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "./images/cloudy.png";
            break;
        case "Clear":
            weatherIcon.src = "./images/sunny.png";
            break;
        case "Rain":
            weatherIcon.src = "./images/rainy.png";
            break;
        case "Drizzle":
            weatherIcon.src = "./images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "./images/misty.png";
            break;
        default:
            weatherIcon.src = "./images/cloudy.png";
            break;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (key)=> {
    if (key.keyCode === 13) {
        checkWeather(searchBox.value);
    }
});