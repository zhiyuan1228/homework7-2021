var video = document.getElementById("player1");
var volume = document.getElementById("volume");
var slider = document.getElementById("slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.getElementById("play").addEventListener("click", function(){
	video.play();
	volume.innerHTML = slider.value + "%";
	console.log("Play video")
});

document.getElementById("pause").addEventListener("click", function(){
	video.pause();
	console.log("Pause video")
});

document.getElementById("slower").addEventListener("click", function(){
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate)
});

document.getElementById("faster").addEventListener("click", function(){
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate)
});

document.getElementById("skip").addEventListener("click", function(){
	console.log("Original location " + video.currentTime);
	if (video.currentTime + 15 > video.duration) {
		console.log("Going back to beginning");
		console.log("New location 0");
		video.currentTime = 0;
	}
	else{
		video.currentTime += 15;
		console.log("New location " + video.currentTime);
	}
});

var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function(){
	if (video.muted) {
		video.muted = false;
		muteButton.innerHTML = "Mute";
	}
	else {
		video.muted = true;
		muteButton.innerHTML = "Unmute";
	}
});

slider.oninput = function() {
	volume.innerHTML = this.value + "%";
	video.volume = this.value / 100;
	console.log(slider.value / 100)
}

document.getElementById("vintage").addEventListener("click", function(){
	video.className = "oldSchool";
});

document.getElementById("orig").addEventListener("click", function(){
	video.className = "video";
});