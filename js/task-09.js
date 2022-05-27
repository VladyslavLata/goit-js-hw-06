function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const currentColorEl = document.querySelector('.color');
const bodyEl = document.body;

btnEl.addEventListener('click', onBtnClickChangeBgColor);

function onBtnClickChangeBgColor() {
  const bgColor = getRandomHexColor();
  currentColorEl.textContent = bgColor;
  bodyEl.style.backgroundColor = bgColor;
}