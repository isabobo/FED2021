var button = document.querySelector('#deKnop');
var list = document.querySelector('#jsForm')
var cancel = document.querySelector('#cancelKnop');

button.addEventListener('click', formPopup);

function formPopup() {
  list.classList.toggle("show");
}

cancel.addEventListener('click', formHide);

function formHide() {
  list.classList.toggle("hide");
}
