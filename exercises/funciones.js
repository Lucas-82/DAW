//EJERCICIO A
/*

function suma(a, b) {
  return a + b;
}
var resultado = suma(3, 5);
console.log(resultado);
*/

//EJERCICIO B
/*
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parametros tiene un error");
    return NaN;
  } else {
    return a + b;
  }
}
var validacion = suma(82, "Lucas");
console.log(validacion);
*/
/*
//EJERCICIO C
function validateInteger(a) {
  if (Number.isInteger(a)) {
    return console.log("Verdadero");
  }
}
var numero = validateInteger(10);
*/
/*
//EJERCICIO D
function suma(a, b) {
  if (!esEntero(a) || !esEntero(b)) {
    alert("Error: Los números deben ser enteros");
    return Math.round(a) + Math.round(b);
  }

  return a + b;
}

function esEntero(numero) {
  return Math.floor(numero) === numero;
}

var resultado = suma(5.6, 3);
console.log(resultado);
*/

//EJERCICIO E