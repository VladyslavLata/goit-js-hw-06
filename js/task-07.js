const inputRangeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

inputRangeEl.addEventListener('input', onChangeFontSizeText);

function onChangeFontSizeText() {
  textEl.style.fontSize = `${event.currentTarget.value}px`; 
}