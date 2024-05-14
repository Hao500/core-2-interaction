function add(a, b) {
    return a + b;
}

function makeItGreen(){
    document.getElementById('circle').style.backgroundColor='green';
}


const misaAmane = {
    name: 'Misa Amane',         
    age: 19,                           
    occupation: ['Model', 'Singer', 'Actress'], 
    physicalAttributes: {            
        height: '152 cm',
        weight: '36 kg',
        bloodType: 'AB'
    },
    shinigami: {                  
        name: 'Rem',
        lifespanTrade: 2              
    }
};

console.log(misaAmane);


async function getWeather() {
    const lat = '40.776676';  
    const lon = '-73.971321';

    try {
        const gridPoint = await getGridPoint(lat, lon);
        const forecast = await getWeatherForecast(gridPoint.gridId, gridPoint.gridX, gridPoint.gridY);

        document.getElementById('circle').innerText = `${forecast.temperature}°C, ${forecast.shortForecast}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


async function getGridPoint(lat, lon) {
    const response = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
    const data = await response.json();
    return data.properties;
}


async function getWeatherForecast(office, gridX, gridY) {
    const response = await fetch(`https://api.weather.gov/gridpoints/${office}/${gridX},${gridY}/forecast`);
    const data = await response.json();
    return data.properties.periods[0]; 
}


getWeather();


