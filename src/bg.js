const body = document.querySelector("body");
const IMG_NUMBER = 5;

function generateNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number
}
function paintImage(number){
    const image = new Image();
    image.src = `src/images/${number}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function init(){
    const randomNumber = generateNumber();
    paintImage(randomNumber);
}

init();