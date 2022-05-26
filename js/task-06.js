const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onGetLengthInputOffFocus);
inputEl.addEventListener('focus', onInputFocus);

function onGetLengthInputOffFocus() {
  if (this.value.length >= this.dataset.length) {
    this.classList.add('valid');
  } else { this.classList.add('invalid'); } 
  }


function onInputFocus() {
if (!this.classList.contains('validation-input')) {
  this.classList.add('validation-input');}
 else if (this.classList.contains('valid')) {
    this.classList.remove('valid');
  } else if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
  }
}



// function onGetLengthInputOffFocus() {
//   if (this.value.length >= this.dataset.length) {
//     if (this.classList.contains('invalid')) {
//       this.classList.toggle('invalid');
//     } if (!this.classList.contains('valid')) {
//       this.classList.toggle('valid');
//     }
//   } else {
//     if (this.classList.contains('valid')) {
//       this.classList.toggle('valid');
//     } if (!this.classList.contains('invalid')) {
//       this.classList.toggle('invalid');
//     }
//   }
// }
