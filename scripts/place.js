

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

const TEMPERATURE = Math.random() * 10;  // °C
const WIND_SPEED = 10;  // km/h


function calculateWindChill(temp, wind) {
    return parseFloat((13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1));
}

const windChillEl = document.getElementById('wind-chill');

const windSpeedEl = document.getElementById('wind-speed');
windSpeedEl.textContent = `${WIND_SPEED} km/h`;

const temperatureEl = document.getElementById('temperature');
temperatureEl.textContent = `${TEMPERATURE.toFixed(1)}°C`;

if (TEMPERATURE <= 10 && WIND_SPEED > 4.8) {
    windChillEl.textContent = `${calculateWindChill(TEMPERATURE, WIND_SPEED)}°C`;
} else {
    windChillEl.textContent = 'N/A';
}