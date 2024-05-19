// this is the javascript dedicated to the video section due to
//other site does not need a javascript for it to work

//first of all i declare a variable plaPauseButton,
//playPauseImg, muteUnmuteButton and 
//muteUnmuteImg so that we can use call it 
//in a function later
//we use querrySelector to choose the exact id of the 
//class that created for the button on video.html,
//after declaring, i addeventlistener so that when i call
//it in the function it can perfom with the event i 
//set it to be.
const playPauseButton = document.querySelector("#play-pause-button");
playPauseButton.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
muteUnmuteButton.addEventListener("click",toggleAudio);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

//after declaring all of buttons and addeventlistner
//i declare the next to variable that are my video
const myVideo = document.querySelector("#my-video");

//in here i recall the varible i declare above and use
//it in a function to make it work
// for the both button, as we were taught in class
// we use a if else loop to generate the function
//if number one is true and commit but if false commit else
//if the video is playing then if we click the play but if
// the video stop then we play. Both have their own icon depend
// on the statement that it commited to
function togglePlay() {
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
      //if this is true show the image below
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    } else {
      myVideo.pause();
      // if this is true show the image below
      playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
  }

function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    //if this commited then show the icon white background
    muteUnmuteButton.style.backgroundColor = "white";
  } else {
    myVideo.muted = true;
    //if this commited then show the icon background in that color
    muteUnmuteButton.style.backgroundColor = "#7b775e";
  }
}
