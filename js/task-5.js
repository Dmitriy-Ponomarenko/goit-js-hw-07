'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});