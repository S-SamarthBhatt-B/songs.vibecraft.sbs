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

const createSongDiv = (song, index) => {
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
    <button class="playThisBtn" data-index="${index}">▶ Play this</button>
  `;
  return songDiv;
};

songs.forEach((song, index) => {
  if (song.type === 'Instrumental') {
    instrumentalDetails.querySelector('.song-list').appendChild(createSongDiv(song, index));
  } else {
    vocalDetails.querySelector('.song-list').appendChild(createSongDiv(song, index));
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
const togglePlayPauseBtn = document.getElementById('togglePlayPauseBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressBar = document.getElementById('progressBar');

// Set default volume
volumeControl.value = 0.5;
audioPlayer.volume = 0.5;

// Update "Now Playing" text
function updateNowPlaying() {
  nowPlaying.textContent = `▶ Now Playing: ${songs[currentIndex].title}`;
}

// Load and play song by index
function playSong(index) {
  currentIndex = index;
  audioPlayer.src = songs[currentIndex].file;
  audioPlayer.play();
  updateNowPlaying();
  togglePlayPauseBtn.textContent = "⏸"; // show pause icon
}

// Play next song (with shuffle support)
function playNext() {
  if (isShuffle) {
    if (shuffledOrder.length === 0) buildShuffledOrder();
    let currentPos = shuffledOrder.indexOf(currentIndex);
    currentPos = (currentPos + 1) % shuffledOrder.length;
    currentIndex = shuffledOrder[currentPos];
  } else {
    currentIndex = (currentIndex + 1) % songs.length;
  }
  playSong(currentIndex);
}

// Play previous song (with shuffle support)
function playPrev() {
  if (isShuffle) {
    if (shuffledOrder.length === 0) buildShuffledOrder();
    let currentPos = shuffledOrder.indexOf(currentIndex);
    currentPos = (currentPos - 1 + shuffledOrder.length) % shuffledOrder.length;
    currentIndex = shuffledOrder[currentPos];
  } else {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  }
  playSong(currentIndex);
}

// Build shuffled order array
function buildShuffledOrder() {
  shuffledOrder = [...Array(songs.length).keys()];
  for (let i = shuffledOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOrder[i], shuffledOrder[j]] = [shuffledOrder[j], shuffledOrder[i]];
  }
}

// Toggle shuffle but do NOT change current song immediately
function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('shuffle-on', isShuffle);
  if (isShuffle && shuffledOrder.length === 0) {
    buildShuffledOrder();
  }
  // Don't change song on shuffle toggle - just toggle state
}

// Toggle play/pause button
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    togglePlayPauseBtn.textContent = "⏸";
  } else {
    audioPlayer.pause();
    togglePlayPauseBtn.textContent = "▶";
  }
}

// Event listeners for buttons
togglePlayPauseBtn.addEventListener('click', () => {
  if (!audioPlayer.src) playSong(currentIndex);
  else togglePlayPause();
});
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
shuffleBtn.addEventListener('click', toggleShuffle);
volumeControl.addEventListener('input', e => {
  audioPlayer.volume = e.target.value;
});

// Update progress bar - keep this, but remove time display updates
audioPlayer.addEventListener('timeupdate', () => {
  if (!isNaN(audioPlayer.duration)) {
    progressBar.max = Math.floor(audioPlayer.duration);
    progressBar.value = Math.floor(audioPlayer.currentTime);
  }
});

// Seek song by clicking or dragging progress bar
progressBar.addEventListener('input', () => {
  audioPlayer.currentTime = progressBar.value;
});

// Auto play next song on ended
audioPlayer.addEventListener('ended', playNext);

// Play song from "Play this" buttons in song list
document.querySelectorAll('.playThisBtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    playSong(index);
  });
});

// Initialize player display
updateNowPlaying();
togglePlayPauseBtn.textContent = "▶";

const musicControls = document.getElementById('music-controls');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Make sure position is fixed for dragging
musicControls.style.position = 'fixed';

// Set initial position bottom-right inside viewport with margin
function setInitialPosition() {
  const margin = 20;
  const left = window.innerWidth - musicControls.offsetWidth - margin;
  const top = window.innerHeight - musicControls.offsetHeight - margin;
  musicControls.style.left = left + 'px';
  musicControls.style.top = top + 'px';
}

// Call on load and resize
window.addEventListener('load', setInitialPosition);
window.addEventListener('resize', setInitialPosition);

// Mouse down starts dragging, but only if not clicking controls inside
musicControls.addEventListener('mousedown', (e) => {
  // Prevent dragging if clicking buttons, inputs, links, audio controls inside container
  const tag = e.target.tagName.toLowerCase();
  if (['button', 'input', 'a', 'audio'].includes(tag) || e.target.closest('audio')) return;

  isDragging = true;
  offsetX = e.clientX - musicControls.getBoundingClientRect().left;
  offsetY = e.clientY - musicControls.getBoundingClientRect().top;
  musicControls.style.transition = 'none';
  musicControls.style.cursor = 'grabbing';

  // Prevent text selection while dragging
  e.preventDefault();
});

// Stop dragging on mouse up
document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    musicControls.style.transition = '';
    musicControls.style.cursor = 'move';
  }
});

// Dragging logic on mouse move
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  let newLeft = e.clientX - offsetX;
  let newTop = e.clientY - offsetY;

  // Clamp position so it stays inside viewport
  const minLeft = 0;
  const minTop = 0;
  const maxLeft = window.innerWidth - musicControls.offsetWidth;
  const maxTop = window.innerHeight - musicControls.offsetHeight;

  if (newLeft < minLeft) newLeft = minLeft;
  if (newTop < minTop) newTop = minTop;
  if (newLeft > maxLeft) newLeft = maxLeft;
  if (newTop > maxTop) newTop = maxTop;

  musicControls.style.left = newLeft + 'px';
  musicControls.style.top = newTop + 'px';
});
