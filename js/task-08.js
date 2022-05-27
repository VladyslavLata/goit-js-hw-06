const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSendFormBtnClick);

function onSendFormBtnClick() {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.length === 0 || password.value.length === 0) {
    alert('Email и Password не могут быть пустыми!');
    return;
  } else if (password.value.includes(' ')) {
    alert('Password не должен содержать "Пробел"!');
    return;
  }
  
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`)
  })

  const formDataObject = {};
  formDataObject.email = email.value;
  formDataObject.password = password.value;
  console.log(formDataObject);

  event.currentTarget.reset();
}