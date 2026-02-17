const API_KEY = "8c715644a7453fafe0bfe88ee8fc0ea3";

function getWeather() {
  const city = document.getElementById("city").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
  )
  .then(res => res.json())
  .then(data => {
    if (data.cod !== 200) {
      document.getElementById("result").innerHTML = "Ciudad no encontrada";
      return;
    }

    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ ${data.main.temp} °C</p>
      <p>💧 ${data.main.humidity} %</p>
      <p>🌬️ ${data.wind.speed} m/s</p>
      <p>${data.weather[0].description}</p>
    `;
  });
}
