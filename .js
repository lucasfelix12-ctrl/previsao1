const API_KEY = "your_api_key_here";
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=São Paulo,BR&appid=${API_KEY}&units=metric`;

const weatherContainer = document.getElementById("weather-container");

fetch(WEATHER_API_URL)
  .then((response) => response.json())
  .then((data) => {
    const { main, weather } = data;
    const weatherIconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
    const weatherInfo = `
      <img class="weather-icon" src="${weatherIconUrl}" alt="${weather[0].description}">
      <div class="weather-description">${weather[0].description}</div>
      <div class="temperature">${main.temp}°C</div>
      <div class="humidity">Humidity: ${main.humidity}%</div>
      <div class="wind-speed">Wind Speed: ${data.wind.speed} m/s</div>
    `;
    weatherContainer.innerHTML = weatherInfo;
  })
  .catch((error) => {
    console.error(error);
    weatherContainer.innerHTML = "Failed to fetch weather data.";
  });
