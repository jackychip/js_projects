let [centiseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeDisplay = document.getElementById("time-display");
const playButton = document.getElementById("play-button");

let toggleRunning = false; 
let timer = null;

const updateStopwatch = () => {
    centiseconds++;
    if (centiseconds >= 100) {
        centiseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let c = centiseconds < 10 ? "0" + centiseconds : centiseconds;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    timeDisplay.innerHTML = `${h}:${m}:${s}:${c}`
}

const clickStopwatch = () => {
    toggleRunning = !toggleRunning;

    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(updateStopwatch, 10);

    if (!toggleRunning) {
        stopStopwatch();
        playButton.src = "./images/start.png";
    }
    else {
        playButton.src = "./images/pause.png";
    }
}

const stopStopwatch = () => {
    clearInterval(timer);
}

const restartStopwatch = () => {
    clearInterval(timer);
    [centiseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeDisplay.innerHTML = "00:00:00:00";
}