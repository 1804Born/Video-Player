const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause() {
  if (video.paused) {
    video.play()
  } else {
    video.pause();
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
};

function updateProgress() {
  // Update the progress bar value based on the current time of the video
  progress.value = (video.currentTime / video.duration) * 100;

  // Get Minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
};

video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setProgress)



// console.log(timestamp);
// let isPlaying = false;

// // play.addEventListener('click', () => video.play());
// // pause.addEventListener('click', () => video.pause());
// // stop.addEventListener('click', () => {
// //   video.pause();
// //   video.timestamp = 0;
// // });

// function playSong() {
//   controls.classList.add('play');
//   playBtn.querySelector('i.fa').classList.remove('fa-play');
//   playBtn.querySelector('i.fa').classList.add('fa-pause');
//   video.play();

//   isPlaying = true;
// }

// function pauseSong() {
//   controls.classList.remove('play');
//   playBtn.querySelector('i.fa').classList.add('fa-pause');
//   playBtn.querySelector('i.fa').classList.remove('fa-play');
//   video.pause();

//   isPlaying = false;
// }

// playBtn.addEventListener('click', () => {
//   const isPlaying = controls.classList.contains('play');

//   if (isPlaying) {
//     pauseSong();
//   } else {
//     playSong();
//   }
// });

// stopBtn.addEventListener('click', () => {
//   video.pause();
//   video.timestamp = 0;
//   isPlaying = false;
// });

// function setProgress(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = video.duration;

//   video.timestamp = (clickX / width) * duration;
// }

// video.addEventListener(
//   'timeupdate',
//   () => (timestamp.innerText = video.timestamp)
// );

// progress.addEventListener('click', setProgress);


