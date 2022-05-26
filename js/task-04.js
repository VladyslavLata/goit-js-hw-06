

const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const counterEl = document.getElementById('value');

let counterValue = 0;

btnDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

btnIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});



