const lastModified = new Date(document.lastModified)
document.getElementById('year').textContent = lastModified.getFullYear();
document.getElementById('last-modified').textContent = `Last Modification: ${lastModified.toLocaleString()}`;

let temperature = 10;
let windSpeed = 10;
const calculateWindChill = (temperature, windSpeed) => (temperature <= 10, windSpeed >4.8) ? (13.12 + 0.6215*temperature - 11.37*(windSpeed**0.16) + 0.3965*temperature*(windSpeed**0.16)).toFixed(1) : "N/A";

document.getElementById('temperature').innerHTML = `${temperature}&#8451;`;
document.getElementById('wind').textContent = `${windSpeed}km/h`
document.getElementById('wind-chill').innerHTML = `${calculateWindChill(temperature, windSpeed)}&#8451;`;
