let base: number = Number(prompt(" ingrese numero de base"));
let exponente: number = Number(prompt(" ingrese numero de exponente"));

if (exponente < 0) {
  exponente = Number(prompt("Ingrese otro numero"));
}

function calcularPotencia(base: number, exponente: number): number {
  let resultado: number = 1;

  if (exponente === 0) {
    resultado = 1;
  } else {
    for (let i = 1; i <= exponente; i++) {
      resultado = resultado * base;
    }
  }
  return resultado;
}

if (exponente < 0) {
  exponente = Number(prompt("Ingrese otro numero"));
}

console.log(
  "El calculo de la potencia es: ",
  calcularPotencia(base, exponente)
);
