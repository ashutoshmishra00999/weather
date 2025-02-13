const apiKey = '32547be28677190974fc66ad4169b6b2';
const city = 'Mumbai'; // default city

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayWeather(data);
    })
    .catch(error => console.error('Error:', error));

function displayWeather(data) {
    const cityElement = document.getElementById('city');
    const weatherDescriptionElement = document.getElementById('weather-description');
    const temperatureElement = document.getElementById('temperature');
    const humidityElement = document.getElementById('humidity');
    const windSpeedElement = document.getElementById('wind-speed');

    cityElement.textContent = data.name;
    weatherDescriptionElement.textContent = data.weather[0].description;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}    

const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displayWeather(data);
            })
            .catch(error => console.error('Error:', error));
    }
});