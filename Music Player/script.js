const progressBar = document.getElementById("progress-bar");
const audioElement = document.getElementById("audio-control");
const pausePlayElement = document.getElementById("pause-play-control");

audioElement.onloadedmetadata = () => {
    progressBar.max = audioElement.duration;
    progressBar.value = audioElement.currentTime;
}

const playPause = () => {
    if (pausePlayElement.classList.contains("fa-pause")) {
        audioElement.pause();
        pausePlayElement.classList.remove("fa-pause");
        pausePlayElement.classList.add("fa-play");
    }
    else {
        audioElement.play();
        pausePlayElement.classList.remove("fa-play");
        pausePlayElement.classList.add("fa-pause");
    }
}

if (audioElement.play()) {
    setInterval(() => {
        progressBar.value = audioElement.currentTime;
    }, 500);
}

progressBar.onchange = () => {
    audioElement.play();
    audioElement.currentTime = progressBar.value;
    pausePlayElement.classList.remove("fa-play");
    pausePlayElement.classList.add("fa-pause");
}