"use strict";

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
sun.addEventListener("click", () => {
	audioPlay("./audio/laugh-2.wav");
});

/**
 * Update sun img
 */
const images = [
	"./images/sun-face-1.png",
	"./images/sun-face-2.png",
	"./images/sun-face-3.png",
	"./images/sun-face-4.png",
];

let index = 0;
const sunImg = document.querySelector(".sun img");

const updateImage = () => {
	sunImg.src = images[index];

	if (index >= 3) {
		index = 0;
	} else {
		index++;
	}
};

window.addEventListener("load", () => {
	setInterval(updateImage, 2000);
});

/**
 * Destroy
 */
document.querySelector("#destroy").addEventListener("click", () => {
	document.querySelector(".warning").classList.add("active");
	document.querySelector(".overlay").classList.add("active");
	audioPlay("./audio/skala.mp3");
});

document.querySelector("#close").addEventListener("click", () => {
	document.querySelector(".warning").classList.remove("active");
	document.querySelector(".overlay").classList.remove("active");
	// audioPlay("./audio/skala.mp3");
});