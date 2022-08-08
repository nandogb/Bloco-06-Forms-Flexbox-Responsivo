// SELETORES
// const INPUT_TEXT = document.querySelector("#input-text");
// const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
// const sumbmitForm = document.querySelector("#enviar");

// function enviarForm(event) {
//   event.preventDefault()
// }

// sumbmitForm.addEventListener("click", enviarForm);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, options);
}
