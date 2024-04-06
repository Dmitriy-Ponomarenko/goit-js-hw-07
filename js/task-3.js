'use strict';

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue || 'Anonymous';
});