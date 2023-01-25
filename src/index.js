
import validator from './validator.js';

document.getElementById("inputNumero").addEventListener("keypress", valideKey)
document.getElementById("validartarjeta").addEventListener("click", validate);

function validate() {
  const result = document.getElementById("result");
  const valid = validator.isValid(document.getElementById("inputNumero").value)
  if (valid) {
    result.innerHTML = "Tarjeta Valida \n" + validator.maskify(document.getElementById("inputNumero").value)
    //Show success in div#result
  }
  else {
    result.innerHTML = "Tarjeta invalida"
    // Show error message in div#result
  }

}
function valideKey(evt) {

  // code is the decimal ASCII representation of the pressed key.
  const code = (evt.which) ? evt.which : evt.keyCode;
 
  if (code === 8) { // backspace.
    return true;
  } else if (code >= 48 && code <= 57) { // is a number.
    return true;
  } else { 
    evt.preventDefault()    //input only numbers addEventListener. 
    return false;
  }

}