const inputEl = document.querySelector('#name-input');
const userNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputName);
 
function onInputName() {
  console.log(userNameEl.textContent);
  if (this.value.length === 0) {
    userNameEl.textContent = 'Anonymous';
  } else 
    userNameEl.textContent = this.value;
}