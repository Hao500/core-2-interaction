var apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    var startTimesContainer = document.getElementById('startTimes');
    if (!startTimesContainer) {
      // 如果没有找到元素，输出错误到控制台
      console.error('The container with ID "startTimes" was not found.');
      return;
    }

    var periods = data.properties.periods;
    var startTimesContent = periods.map(period => `<p>Start Time: ${period.startTime}</p>`).join('');
    startTimesContainer.innerHTML = startTimesContent;
  })
  .catch(error => {
    console.error('Error fetching the weather data:', error);
  });
