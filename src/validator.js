const validator = {
  isValid: isValid,
  maskify: maskify

};

export default validator;


function isValid(creditCardNumber) {
  const procesado = creditCardNumber.trim()
  if (procesado.length === 0) {
    return false

  }
  const arrayNumeroTarjeta = procesado.split("")

  const nuevoArrayInvertido = arrayNumeroTarjeta.reverse();

  const arrayPar = nuevoArrayInvertido.filter(function (x, y) {
    if (y % 2 === 1) return x;
  });

  let arrayImpar = nuevoArrayInvertido.filter(function (x, y) {
    if (y % 2 === 0) return x;
  });

  const arrayplus = arrayPar.map(function (parmulti) {
    const multipar = parmulti * 2;


    if (multipar >= 10) {
      const diezmayor = multipar.toString().split("").map(Number); 

      const arraytres = diezmayor.reduce(function (x, z) {
        return x + z;
      });

      return arraytres;
    }
    else { return multipar }
  });
  arrayImpar = arrayImpar.map(Number)

  const sumaplus = arrayplus.reduce(function (x, y) {
    return x + y
  })
  const sumaImpar = arrayImpar.reduce(function (x, z) {
    return x + z;
  })
  const resultado = sumaplus + sumaImpar;

  if (resultado % 10 === 0) {
    return true;
  } else {
    return false;
  }

}

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);



}

