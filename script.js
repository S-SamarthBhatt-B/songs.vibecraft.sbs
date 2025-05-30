  // script.js

const songs = [
{
    title: "Aurora Drift",
    file: "songs/1.mp3",
    type: "Instrumental"
  },
  {
    title: "Celestial Tides",
    file: "songs/2.mp3",
    type: "Instrumental"
  },
  {
    title: "Neon Mirage",
    file: "songs/3.mp3",
    type: "Instrumental"
  },
  {
    title: "Echoes of the Void",
    file: "songs/4.mp3",
    type: "Instrumental"
  },
  {
    title: "Midnight Current",
    file: "songs/5.mp3",
    type: "Instrumental"
  },
  {
    title: "Starfield Horizon",
    file: "songs/6.mp3",
    type: "Instrumental"
  },
  {
    title: "Crystal Skies",
    file: "songs/7.mp3",
    type: "Instrumental"
  },
  {
    title: "Velvet Frequency",
    file: "songs/8.mp3",
    type: "Instrumental"
  },
  {
    title: "Gravity Bloom",
    file: "songs/9.mp3",
    type: "Instrumental"
  },
  {
    title: "Phantom Orbit",
    file: "songs/10.mp3",
    type: "Instrumental"
  },
  {
    title: "Lunar Echoes",
    file: "songs/11.mp3",
    type: "Instrumental"
  },
  {
    title: "Nebula Dreams",
    file: "songs/12.mp3",
    type: "Instrumental"
  },
  {
    title: "Luminous Waves",
    file: "songs/13.mp3",
    type: "Instrumental"
  },
  {
    title: "Retro Pulse",
    file: "songs/14.mp3",
    type: "Instrumental"
  },
  {
    title: "Sonic Voyage",
    file: "songs/15.mp3",
    type: "Instrumental"
  },
  {
    title: "Zenith Echo",
    file: "songs/16.mp3",
    type: "Instrumental"
  },
  {
    title: "Liquid Harmony",
    file: "songs/17.mp3",
    type: "Instrumental"
  },
  {
    title: "Dreamscape",
    file: "songs/18.mp3",
    type: "Instrumental"
  },
  {
    title: "Chasing Stars",
    file: "songs/19.mp3",
    type: "Instrumental"
  },
  {
    title: "from the ashes",
    file: "songs/20.mp3",
    type: "Instrumental"
  },
  {
    title: "Frozen Echoes",
    file: "songs/21.mp3",
    type: "Instrumental"
  },
  {
    title: "Prismatic Dawn",
    file: "songs/22.mp3",
    type: "Instrumental"
  },
  {
    title: "Aura Drift",
    file: "songs/23.mp3",
    type: "Instrumental"
  },
  {
    title: "At the Edge of Time",
    file: "songs/24.mp3",
    type: "Instrumental"
  },
  {
    title: "Distance",
    file: "songs/25.mp3",
    type: "Instrumental"
  },
  {
    title: "Radiant Echoes",
    file: "songs/26.mp3",
    type: "Instrumental"
  },
  {
    title: "Motionless",
    file: "songs/27.mp3",
    type: "Instrumental"
  },
  {
    title: "Stellar Fade",
    file: "songs/28.mp3",
    type: "Instrumental"
  },
  {
    title: "Reflections",
    file: "songs/29.mp3",
    type: "Instrumental"
  },
  {
    title: "Shadow Dance",
    file: "songs/30.mp3",
    type: "Instrumental"
  },
  {
    title: "Changes",
    file: "songs/Changes .mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Colours and Shadows",
    file: "songs/Colours and Shadows.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Dil Ki Dhadkanein",
    file: "songs/Dil Ki Dhadkanein.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Endless Adventure",
    file: "songs/Endless Adventure.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Hausle Ki Udaan",
    file: "songs/Hausle Ki Udaan.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Heart of the Journey",
    file: "songs/Heart of the Journey.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "I am Dead",
    file: "songs/I am dead .mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Jindagi Ki Haqiqat",
    file: "songs/Jindagi Ki Haqiqat.mp3",  
    type: "Instrumental + Vocal"
  },
  {
    title: "Lost Echoes",
    file: "songs/Lost Echoes .mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Nazarein Jhuki",
    file: "songs/Nazarein Jhuki.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "New Horizons",
    file: "songs/New Horizons.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Rising Sun",
    file: "songs/Rising Sun .mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Safar",
    file: "songs/Safar.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Shattered Echoes",
    file: "songs/Shattered Echoes.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Together We Rise",
    file: "songs/Together We Rise.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Whispers in the Wind",
    file: "songs/Whispers in the Wind (Male).mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "World on fire",
    file: "songs/World on fire .mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Zindagi Ka Yeh Jo Safar",
    file: "songs/Zindagi Ka Yeh Jo Safar .mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "SoulBreeze",
    file: "songs/SoulBreeze.mp3",
    type: "Instrumental + Vocal"
  },
  {
    title: "Mere Armaan",
    file: "songs/Armaan.mp3",
    type: "Instrumental + Vocal"
  }
];

// Create dropdown song lists
const instrumentalDetails = document.getElementById('instrumentalDetails');
const vocalDetails = document.getElementById('vocalDetails');

const createSongDiv = (song) => {
  const songDiv = document.createElement('div');
  songDiv.classList.add('song');
  songDiv.innerHTML = `
    <h3>${song.title}</h3>
    <p><strong>Type:</strong> ${song.type}</p>
    <audio controls>
      <source src="${song.file}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <a href="${song.file}" download>Download</a>
  `;
  return songDiv;
};

songs.forEach(song => {
  if (song.type === 'Instrumental') {
    instrumentalDetails.querySelector('.song-list').appendChild(createSongDiv(song));
  } else {
    vocalDetails.querySelector('.song-list').appendChild(createSongDiv(song));
  }
});

// Music player controls
const audioPlayer = new Audio();
let currentIndex = 0;
let isShuffle = false;
let shuffledOrder = [];
const shuffleBtn = document.getElementById('shuffleBtn');
const nowPlaying = document.getElementById('nowPlaying');
const volumeControl = document.getElementById('volumeControl');

function updateNowPlaying() {
  nowPlaying.textContent = `▶ Now Playing: ${songs[currentIndex].title}`;
}

function playSong(index) {
  currentIndex = index;
  audioPlayer.src = songs[currentIndex].file;
  audioPlayer.play();
  updateNowPlaying();
}

function playNext() {
  if (isShuffle) {
    currentIndex = (currentIndex + 1) % shuffledOrder.length;
    playSong(shuffledOrder[currentIndex]);
  } else {
    currentIndex = (currentIndex + 1) % songs.length;
    playSong(currentIndex);
  }
}

function playPrev() {
  if (isShuffle) {
    currentIndex = (currentIndex - 1 + shuffledOrder.length) % shuffledOrder.length;
    playSong(shuffledOrder[currentIndex]);
  } else {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(currentIndex);
  }
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('shuffle-on', isShuffle);

  if (isShuffle) {
    shuffledOrder = [...Array(songs.length).keys()];
    // Shuffle the array
    for (let i = shuffledOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOrder[i], shuffledOrder[j]] = [shuffledOrder[j], shuffledOrder[i]];
    }
    // Reset currentIndex to 0 for shuffled list
    currentIndex = 0;
  }
  updateNowPlaying();
}

// Volume control
volumeControl.value = 0.5;
audioPlayer.volume = 0.5;
volumeControl.addEventListener('input', e => {
  audioPlayer.volume = e.target.value;
});

// Play controls
document.getElementById('playBtn').addEventListener('click', () => {
  if (!audioPlayer.src) playSong(currentIndex);
  else audioPlayer.play();
});

document.getElementById('pauseBtn').addEventListener('click', () => {
  audioPlayer.pause();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  playNext();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  playPrev();
});

shuffleBtn.addEventListener('click', toggleShuffle);

// Auto play next on end
audioPlayer.addEventListener('ended', () => {
  playNext();
});

// Initialize now playing
updateNowPlaying();


// DRAGGABLE MUSIC CONTROLS

const musicControls = document.getElementById('music-controls');

let isDragging = false;
let offsetX, offsetY;

musicControls.style.position = 'fixed';

// Set initial position bottom right on page load
function setInitialPosition() {
  const margin = 20;
  musicControls.style.left = (window.innerWidth - musicControls.offsetWidth - margin) + 'px';
  musicControls.style.top = (window.innerHeight - musicControls.offsetHeight - margin) + 'px';
}

window.addEventListener('resize', () => {
  // Optional: reposition if window resizes
  setInitialPosition();
});

setInitialPosition();

musicControls.addEventListener('mousedown', (e) => {
  // Only drag if clicked on the music-controls container, not on buttons/slider
  if (
    e.target.tagName === 'BUTTON' ||
    e.target.tagName === 'INPUT' ||
    e.target.tagName === 'A' ||
    e.target.tagName === 'AUDIO' ||
    e.target.closest('audio')
  ) {
    return; // ignore drag if interacting with controls
  }
  isDragging = true;
  offsetX = e.clientX - musicControls.getBoundingClientRect().left;
  offsetY = e.clientY - musicControls.getBoundingClientRect().top;
  musicControls.style.transition = 'none';
  musicControls.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    musicControls.style.transition = '';
    musicControls.style.cursor = 'move';
  }
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  let left = e.clientX - offsetX;
  let top = e.clientY - offsetY;

  // Boundaries inside viewport
  const minLeft = 0;
  const minTop = 0;
  const maxLeft = window.innerWidth - musicControls.offsetWidth;
  const maxTop = window.innerHeight - musicControls.offsetHeight;

  if (left < minLeft) left = minLeft;
  if (top < minTop) top = minTop;
  if (left > maxLeft) left = maxLeft;
  if (top > maxTop) top = maxTop;

  musicControls.style.left = left + 'px';
  musicControls.style.top = top + 'px';
});
