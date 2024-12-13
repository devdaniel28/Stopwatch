let Seconds = document.querySelector('#seconds');
let Minutes = document.querySelector('#minutes');
let Hours = document.querySelector('#hours');

let numberforSeconds = 0;
let numberforMinutes = 0;
let numberforHours = 0;

let intervalId;

function formatTime(value) {
    return value.toString().padStart(2, '0');
}

function Start() {
    numberforSeconds++;

   
     if (numberforSeconds == 60) {
        numberforSeconds = 0;
        numberforMinutes++;
    }
    if (numberforMinutes == 60) {
        numberforMinutes = 0;
        numberforHours++;
    }

    Seconds.textContent = formatTime(numberforSeconds);
    Minutes.textContent = formatTime(numberforMinutes);
    Hours.textContent = formatTime(numberforHours);
}

function reallyStart() {
    if (!intervalId) { 
        intervalId = setInterval(Start, 1000);
    }
}

function Pause() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}
