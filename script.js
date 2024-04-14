// 在index.html中的</body>标签之前添加
<script>
  var apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var weatherContainer = document.getElementById('weather');
      var periods = data.properties.periods;
      var content = periods.map(period => `
        <div>
          <h3>${period.name}</h3>
          <p>Temperature: ${period.temperature}°${period.temperatureUnit}</p>
          <p>${period.detailedForecast}</p>
        </div>
      `).join('');
      weatherContainer.innerHTML = content;
    });
</script>
