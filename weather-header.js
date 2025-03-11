fetch('https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid=9e151645ef83f622e303e6b845589827')
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    let currentDesc = jsObject.weather[0].description;
    let currentTemp = jsObject.main.temp;
    let windSpeed = jsObject.wind.speed;
    let humidity = jsObject.main.humidity;
    let windChill = currentTemp - (0.7 * (windSpeed * 3.6));
    let iconCode = jsObject.weather[0].icon;

    document.getElementById("current-desc").textContent = currentDesc.charAt(0).toUpperCase() + currentDesc.slice(1);
    document.getElementById("current-temp").textContent = `${currentTemp.toFixed(1)}°F`;
    document.getElementById("current-windChill").textContent = `${windChill.toFixed(1)}°F`;
    document.getElementById("current-humid").textContent = `${humidity}%`;
    document.getElementById("current-windSpeed").textContent = `${windSpeed.toFixed(1)} mph`;
  })
