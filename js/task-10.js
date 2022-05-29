function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.getElementById('boxes');
const boxEl = boxesEl.children;

btnCreateEl.addEventListener('click', onClickBtnCreateBoxes);
btnDestroyEl.addEventListener('click', onClickBtnCleanBoxes);

function onClickBtnCreateBoxes() {
  const currentValue = inputEl.value;
  createBoxes(currentValue);
}

function createBoxes(amount) {
  let arrayBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    arrayBoxes.push(document.createElement('div'));
  }

  boxesEl.prepend(...arrayBoxes);

  [...boxEl].forEach((box, index) => { 
    box.style.width = `${30 + index * 10}px`;
    box.style.height = `${30 + index * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
  })
}

function onClickBtnCleanBoxes() {
  boxesEl.innerHTML = '';
}