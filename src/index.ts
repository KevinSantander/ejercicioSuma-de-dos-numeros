let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let primerNumero: number = Number(dato1.value);
console.log("el primer número es ", primerNumero);
let segundoNumero: number = Number(dato2.value);
console.log("el segundo número es ", segundoNumero);
let resultado: number = Number(primerNumero + segundoNumero);
console.log("El resultado de la suma es ", resultado);

let btnEnvdato1 = document.getElementById("btnEnviardato1");
let btnEnvdato2 = document.getElementById("btnEnviardato2");
let btnEnvresultado = document.getElementById("btnEnviarresultado");

btnEnvdato1.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("el dato ingresado es ", dato1.value);
  //}
});

btnEnvdato2.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("el dato ingresado es ", dato2.value);
  //}
});

btnEnvresultado.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("el dato ingresado es ", dato1.value - dato2.value);
  //}
});

// error al sumar "+" dejo mi trabajo asi como esta para luego repasar en clases sombre este problema//
