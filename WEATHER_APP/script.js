console.log("script tag is loaded...");

const cityName = document.getElementById("cityName");
const card = document.querySelector(".card");
const apiKey = "396d2ac6fa112577797b1fc2817d2f45";
const button = document.getElementById("submitBut");

button.addEventListener("click", event => {
    event.preventDefault();
    const city = cityName.value.trim();
    if(city){
        hideError();
        toGetWeatherData(city);
    } else {
        ShowError("Enter a Valid City !");
    }
});

async function toGetWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                ShowError("City not found. Please enter a valid city name.");
            } else {
                ShowError("Something went wrong. Please try again.");
            }
            return;
        }

        const data = await response.json();
        displayInfo(data);
    } catch (error) {
        ShowError("Network error. Please check your internet connection.");
        console.error("Fetch error:", error);
    }
}

function displayInfo(data) {
    document.getElementById("cityDisplay").textContent = data.name;
    document.getElementById("temperature").textContent = `${data.main.temp}°C`;
    document.getElementById("Humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("descDisply").textContent = data.weather[0].description;
    document.getElementById("emoji").textContent = getEmoji(data.weather[0].id);
    card.style.display = "block";
}

function getEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) return "⛈️";
    if (weatherId >= 300 && weatherId < 500) return "🌦️";
    if (weatherId >= 500 && weatherId < 600) return "🌧️";
    if (weatherId >= 600 && weatherId < 700) return "❄️";
    if (weatherId >= 700 && weatherId < 800) return "🌫️";
    if (weatherId === 800) return "☀️";
    if (weatherId > 800) return "☁️";
    return "🌈";
}

function ShowError(message){
    const error = document.getElementById("error");
    error.style.display = "block";
    error.textContent = message;
    card.style.display = "none";
    console.log("Error:", message);
}

function hideError() {
    const error = document.getElementById("error");
    error.style.display = "none";
    error.textContent = "";
}
