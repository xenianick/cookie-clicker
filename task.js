'use strict';

const elementClickerCounter = document.getElementById("clicker__counter");
let elementClickerCounterNumber = parseInt(elementClickerCounter.textContent);
const imageCookie = document.getElementById("cookie");

let clickSpeed = document.createElement('div');
clickSpeed.innerHTML = '<div id="click__speed">Скорость клика: <span id="click__speed_counter">0</span></div>';
cookie.before(clickSpeed);
const elementClickSpeedCounter = document.getElementById("click__speed_counter");
let elementClickSpeedCounterNumber = parseInt(elementClickSpeedCounter.textContent);
let previousClickDate = +new Date;

imageCookie.onmousedown = () => {
	imageCookie.width = 180;
	elementClickerCounterNumber += 1;
	let newClickDate = +new Date;
	elementClickerCounter.textContent = new String(elementClickerCounterNumber);
	elementClickSpeedCounterNumber = 1000 / (newClickDate - previousClickDate);
	elementClickSpeedCounter.textContent = new String(elementClickSpeedCounterNumber.toFixed(2));
	previousClickDate = +new Date;
};
imageCookie.onmouseup = () => imageCookie.width = 200;
