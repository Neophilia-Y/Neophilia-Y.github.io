const clockContainer = document.querySelector(".js-clock") ,
    clockTitle = clockContainer.querySelector("h1");


function init(){
    getTime();
    // setInterval(function, 호출시간) 1000이 1초
    setInterval(getTime, 1000);
}

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    clockTitle.innerHTML = `${hour}:${minute < 10 ? `0${minute}`: minute}:${second < 10 ? `0${second}`: second}`;
}

init();