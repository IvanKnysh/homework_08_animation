"use strict";

function audioPlay(src) {
	const audio = new Audio();
	audio.src = src;
	audio.autoplay = true;
	audio.volume = 0.1;
}

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
