
// The Week close in function 

function calculateTimeRemaining() {
    var now = new Date();
    var endOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (6 - now.getDay()), 23, 59, 59); 

    var totalSeconds = Math.floor((endOfWeek - now) / 1000);
    var days = Math.floor(totalSeconds / (3600 * 24));
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = Math.floor(totalSeconds % 60);

    return {days, hours, minutes, seconds};
}

function updateCountdown() {
    var time = calculateTimeRemaining();
    var countdownElement = document.getElementById("countdown");
    countdownElement.textContent = `${time.days} d, ${time.hours} h, ${time.minutes} m, ${time.seconds} s`;
}

setInterval(updateCountdown, 1000);

updateCountdown();


// Get The time and date function 

function getCurrentDayName() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var now = new Date();
    var dayIndex = now.getDay();
    return days[dayIndex];
}

function getCurrentTime12HourFormat() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}

function updateDateTime() {
    var dayElement = document.getElementById("currentDay");
    var timeElement = document.getElementById("currentTime");
    
    var currentDay = getCurrentDayName();
    var currentTime = getCurrentTime12HourFormat();
    
    dayElement.textContent = currentDay;
    timeElement.textContent = currentTime;
}
updateDateTime();


// The count down function 
function startCountdown(duration, displayElementId) {
    var display = document.getElementById(displayElementId);
    var timer = duration, minutess, secondss;
    setInterval(function () {
        minutess = parseInt(timer / 60, 10);
        secondss = parseInt(timer % 60, 10);

        minutess = minutess < 10 ? "0" + minutess : minutess;
        secondss = secondss < 10 ? "0" + secondss : secondss;

        display.textContent = minutess + ":" + secondss;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
var tenMinutes = 600;
startCountdown(tenMinutes, "tenMinutesCountdown");





window.onload = function() {
    var playButton = document.querySelector('.splide__toggle__play');

    
        playButton.click();
    
};














