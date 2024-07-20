const tracks = [
    {
        title: "Танцы",
        artist: "ssshhhiiittt!",
        src: "1.mp3",
        cover: "1.png",
        background: "#1e1e1e"
    },
    {
        title: "Дворы",
        artist: "ssshhhiiittt!",
        src: "2.mp3",
        cover: "2.png",
        background: "#ff6347"
    },
    {
        title: "Мокрый район",
        artist: "Атри,Ненаумах",
        src: "3.mp3",
        cover: "3.png",
        background: "#4682b4"
    },
    {
        title: "Эндорфин",
        artist: "Макс Корж",
        src: "4.mp3",
        cover: "4.png",
        background: "#32cd32"
    },
    {
        title: "Take The L",
        artist: "dj trippie flameboy",
        src: "5.mp3",
        cover: "5.png",
        background: "#ff4500"
    },
    {
        title: "Прочь",
        artist: "Перемотка",
        src: "6.mp3",
        cover: "6.png",
        background: "#daa520"
    },
    {
        title: "Солнце",
        artist: "Перемотка",
        src: "7.mp3",
        cover: "6.png",
        background: "#ff1493"
    },
    {
        title: "Песни страрых кассет",
        artist: "Coва",
        src: "8.mp3",
        cover: "7.png",
        background: "#9932cc"
    },
    {
        title: "Гроза",
        artist: "Coва",
        src: "9.mp3",
        cover: "7.png",
        background: "#00ced1"
    },
    {
        title: "On the last floor",
        artist: "Milord",
        src: "10.mp3",
        cover: "8.png",
        background: "#ff69b4"
    }
];

let currentTrack = 0;

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const progress = document.getElementById('progress');
const albumCover = document.getElementById('album-cover');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const background = document.getElementById('background');

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    albumCover.src = track.cover;
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    background.style.backgroundColor = track.backgroundColor;
}

function playNextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
}

document.getElementById('prev').addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playButton.innerHTML = '&#10074;&#10074;';
});

document.getElementById('next').addEventListener('click', () => {
    playNextTrack();
    playButton.innerHTML = '&#10074;&#10074;';
});

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '&#10074;&#10074;'; // Pause icon
    } else {
        audio.pause();
        playButton.innerHTML = '&#9654;'; // Play icon
    }
});

audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.value = percentage;
});

audio.addEventListener('ended', () => {
    playNextTrack();
});

progress.addEventListener('input', () => {
    const time = (progress.value * audio.duration) / 100;
    audio.currentTime = time;
});

// Load the initial track
loadTrack(currentTrack);