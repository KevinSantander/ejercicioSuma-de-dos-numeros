let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnvresultado = document.getElementById("btnEnviarresultado");
rotulo.innerHTML = "calculadora:";

btnEnvresultado.addEventListener("click", () => {
  let primerNumero = Number(dato1.value);
  console.log("el primer número es ", primerNumero);
  let segundoNumero = Number(dato2.value);
  console.log("el segundo número es ", segundoNumero);
  let resultado = Number(primerNumero + segundoNumero);
  console.log("El resultado de la suma es ", resultado);
  //}
});
