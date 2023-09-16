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
	audioPlay("./audio/laugh.wav");
});

/**
 * Update sun img
 */
const images = [
	"./images/sun-face-1.png",
	"./images/sun-face-2.png",
	"./images/sun-face-3.png",
	"./images/sun-face-4.png",
	"./images/sun-face-5.png",
	"./images/sun-face-6.png",
];

let index = 0;
const sunImg = document.querySelector(".sun img");

const updateImage = () => {
	sunImg.src = images[index];

	if (index >= images.length - 1) {
		index = 0;
	} else {
		index++;
	}
};

window.addEventListener("load", () => {
	setInterval(updateImage, 3000);
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
