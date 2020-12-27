/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#aceptarIntegrantes').onclick = function () {
    const $cantidadIntegrantes = Number(document.querySelector('#cantidadIntegrantes').value);
    if (!validarEnteroPositivo($cantidadIntegrantes, 20)) {
        crearImputs($cantidadIntegrantes);
        document.formEdades.style = '';      //muestra formEdades
        document.querySelector('#botonCalcular').style = '';   //muestra botonCalcular
        ocultaElemento('formIntegrantes');
        ocultaElemento('aceptarIntegrantes');
    }
    else
        console.log('error');
}
document.querySelector('#botonCalcular').onclick = function () {
    let edades = tomarEdades('.inputEdad');
    //mostrar div
    if (!validarEdades(edades, 100)) {
        document.querySelector('#resultados').style = '';
        document.querySelector('#promedioEdad').value = calcularPromedio(edades, 2);
        document.querySelector('#edadMayor').value = Math.max(...edades);
        document.querySelector('#edadMenor').value = Math.min(...edades);
    } else 
    console.log ('error');
}

function validarEnteroPositivo(cantidad, maximo) {
    if (!/^[0-9]+$/.test(cantidad)) {
        return 'Ingresar un número entero positivo';
    }
    if (cantidad > maximo)
        return `Ingrese un número menor a ${maximo}`;
    return '';
}

function validarEdades(edades, maximo) {
    let contador = 0;
    edades.forEach(function (edad) {
        if (validarEnteroPositivo(edad, maximo))
            contador++;
    });
    return contador;
}

function ocultaElemento(id) {
    document.querySelector(`#${id}`).style.display = 'none';
}
function tomarEdades(clase) {
    const $edades = document.querySelectorAll(clase);
    let arreglo = [];
    for (let i = 0; i < $edades.length; i++) {
        $edades[i].value != 0 ? arreglo.push(Number($edades[i].value)) : '';
    }
    return arreglo;
}
function calcularPromedio(arreglo, cantDecimales) {
    let sumatoria = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sumatoria += arreglo[i];
    }
    return (sumatoria / arreglo.length).toFixed(cantDecimales);
}
function crearImputs(cantidad) {
    for (let i = 1; i <= cantidad; i++) {

        const nuevoLabel = document.createElement('label');
        const nuevoInput = document.createElement('input');
        const br = document.createElement('br');

        nuevoLabel.textContent = 'Edad: ';
        nuevoInput.className = 'inputEdad'
        nuevoInput.placeholder = 'Familiar ' + i;
        nuevoInput.value = 5 + 2 * i;

        document.formEdades.appendChild(nuevoLabel);
        document.formEdades.appendChild(nuevoInput);
        document.formEdades.appendChild(br);
    }
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
