const COORDS = 'coords';
const API_KEY = "c48b9bb9f8b45f2b0640a3c5f39ad98c";
const weather = document.querySelector(".js-weather");

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = parseInt(json.main.temp,10);
        const place = json.name;
        weather.innerText = `${temperature}°C @ ${place}`;
    });

}

function successGeo(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, longitude 
    } //key ,value 값이 같으면 그냥 이렇게 써도 된다.
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function errorGeo(){
    console.log("access deny!");
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();