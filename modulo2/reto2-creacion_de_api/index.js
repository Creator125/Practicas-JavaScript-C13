async function fetchWeather() {
  const city = document.getElementById("city").value;
  const weatherContainer = document.getElementById("weather");

  const apiKey = 'f4cec2f8102f05b64f814ed6d51bc5f2'; // Coloca tu clave API de OpenWeatherMap aquí

  try {
    // Fetch weather data
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?
    q=${city}&units=metric&appid=${apiKey}`);
    const weatherData = await weatherResponse.json();

    // Display weather information
    weatherContainer.innerHTML = `
      <h2>Weather in ${city}</h2>
      <p>Temperature: ${weatherData.main.temp} Kelvin</p>
      <p>Description: ${weatherData.weather[0].description}</p>
      <p>Humidity: ${weatherData.main.humidity}%</p>
    `;
  } catch (error) {
    console.error("Error fetching data:", error);
    weatherContainer.innerHTML =
      "<p>Error fetching data. Please check the city name and try again.</p>";
  }
}
