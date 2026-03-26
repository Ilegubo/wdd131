const lastModified = new Date(document.lastModified)
document.getElementById('year').textContent = lastModified.getFullYear();
document.getElementById('last-modified').textContent = `Last Modification: ${lastModified.toLocaleString()}`;

let temperature = 10;
let windSpeed = 10;
const calculateWindChill = (temperature, windSpeed) => {
    if (temperature <=10  && windSpeed>4.8){
        return temperature * windSpeed;
    }
    return `Buggy Code`;
}

document.getElementById('temperature').textContent = temperature;
document.getElementById('wind').textContent = `${windSpeed}`
document.getElementById('wind-chill').textContent = `${calculateWindChill(temperature, windSpeed)}`;
