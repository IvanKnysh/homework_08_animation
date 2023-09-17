"use strict";

/**
 * Welcome section
 */
window.addEventListener("load", () => {
	setTimeout(() => {
		document.querySelector(".welcome #lizard-1").style.display = "none";
		document.querySelector(".welcome #lizard-2").style.display = "block";
	}, 3000);

	setTimeout(() => {
		document.querySelector(".welcome").style.display = "none";
		document.querySelector(".cartoon").style.display = "block";
	}, 4700);
});

const audioPlay = (src) => {
	const audio = new Audio();
	audio.src = src;
	audio.autoplay = true;
	audio.volume = 0.1;
};

/**
 * Sun sound effect by click
 */
const sun = document.querySelector(".sun");
sun.addEventListener("click", () => audioPlay("./audio/laugh.wav"));

/**
 * Update sun img
 */
const images = [
	"./images/sun-face-1.png",
	"./images/sun-face-2.png",
	"./images/sun-face-3.png",
	"./images/sun-face-4.png",
	"./images/sun-face-5.png",
];

let index = 0;
const sunImg = document.querySelector(".sun img");

const updateImage = () => {
	sunImg.src = images[index];
	index >= images.length - 1 ? (index = 0) : index++;

	// rain
	if (index === 3) {
		document.querySelector("#rain").classList.add("active");
	} else {
		document.querySelector("#rain").classList.remove("active");
	}
};

window.addEventListener("load", () => {
	setInterval(updateImage, 4000);
});

/**
 * Destroy
 */
document.querySelector("#destroy").addEventListener("click", () => {
	document.querySelector(".warning").classList.add("active");
	document.querySelector(".overlay").classList.add("active");

	audioPlay("./audio/bra.mp3");

	setTimeout(() => {
		audioPlay("./audio/skala.mp3");
	}, 300);
});

document.querySelector("#close").addEventListener("click", () => {
	document.querySelector(".warning").classList.remove("active");
	document.querySelector(".overlay").classList.remove("active");
});

/**
 * Parallax
 */
const root = document.documentElement;

root.addEventListener("mousemove", (e) => {
	root.style.setProperty(
		"--move-x",
		(e.clientX - innerWidth / 2) * -0.005 + "deg"
	);
	root.style.setProperty(
		"--move-y",
		(e.clientY - innerHeight / 2) * -0.01 + "deg"
	);
});

/**
 * Sound of nature
 */
const control = document.querySelector("#control");
const volume = document.querySelector("#volume");
const audio = document.querySelector("#nature");

// set volume 50% as default
audio.volume = 0.5;

// play / pause audio event
control.addEventListener("click", (e) => {
	e.target.classList.toggle("active");
	e.target.classList.contains("active") ? audio.play() : audio.pause();
});

// change volume event
volume.addEventListener("input", (e) => {
	audio.volume = e.target.value / 100;
});
