//CLASE 4
//  Crear una funcion que calcule el promedio de un array
function calcularPromedio(array) {
    let sumatoria = 0;
    for (let i = 0; i < array.length; i++) {
        sumatoria = sumatoria + array[i];
    }
    return sumatoria / array.length;
}

//let notas = [9,9,9,10,10,10];
//console.log(calcularPromedio(notas));


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.

// Cuenta del 1 al 50 e imprime los números:
//
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.

// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
//
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

function fizzBuzz(valorInicial, valorFinal) {
    for (let i = valorInicial; i <= valorFinal; i++) {
        let resultado = "";
        resultado = "";
        if (i % 3 === 0) {
            resultado = "Fizz";
        }
        if (i % 5 === 0) {
            resultado += "Buzz";
        }
        else {
            resultado = i;
        }
        console.log(resultado);
    }
}

function fizzBuzz2(valorInicial, valorFinal) {
    for (let i = valorInicial; i <= valorFinal; i++) {
        let resultado = "";
        resultado = "";
        if (i % 3 === 0) {
            resultado = "Fizz";
        }
        if (i % 5 === 0) {
            resultado += "Buzz";
        }
        console.log(resultado || i); // si resultado es "", como es falso entonces imprime i
    }
}

//fizzBuzz2(1,30);