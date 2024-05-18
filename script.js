const playPauseButton = document.querySelector("#play-pause-button");
playPauseButton.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
muteUnmuteButton.addEventListener("click",toggleAudio);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

// const increaseVolume = document.querySelector("#increase-volume-button");
// muteUnmuteButton.addEventListener("click",togglePlay);
// const increaseVolumeImg = document.querySelector("#increase-volume-img");

// const decreaseVolume = document.querySelector("#decrease-volume-button");
// muteUnmuteButton.addEventListener("click",togglePlay);
// const decreaseVolumeImg = document.querySelector("#decrease-volume-img");

const myVideo = document.querySelector("#my-video");
const videoName = document.querySelector("#video-name");

function togglePlay() {
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    } else {
      myVideo.pause();
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
  }

function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteButton.style.backgroundColor = "white";
  } else {
    myVideo.muted = true;
    muteUnmuteButton.style.backgroundColor = "#7b775e";
  }
}
