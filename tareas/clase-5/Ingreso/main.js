const $botonAceptar = document.querySelector('#botonEnviar');
$botonAceptar.onclick = function(){
    let $primerNombre = document.querySelector('#inputPrimerNombre').value;
    let $segundoNombre = document.querySelector('#inputSegundoNombre').value;
    let $Apellido = document.querySelector('#inputApellido').value;
    let $Edad = document.querySelector('#inputEdad').value;

    //console.log = $primerNombre + $segundoNombre + $Apellido + $Edad
    const nodoP = document.querySelector('#datosDeUsuario');
    let datos = [$primerNombre, $segundoNombre, $Apellido, $Edad];
    for(let i=0 ; i< datos.length; i++){
    let nuevoLi = document.createElement('li');
    nuevoLi.innerText = datos[i];
    nodoP.appendChild(nuevoLi);
    }

    const $title = document.querySelector('h1');
    $title.innerText = `Bienvenido, ${$primerNombre}!`
    return false;
}
let sumatoriaHoras = 0;
let sumatoriaMinutos = 0;
let sumatoriaSegundos = 0;
const $enviarTiempo = document.querySelector('#botonEnviarTiempo');
$enviarTiempo.onclick = function(){
    let $horas = document.querySelector('#inputHoras').value;
    let $minutos = document.querySelector('#inputMinutos').value;
    let $segundos = document.querySelector('#inputSegundos').value;
    sumatoriaHoras = sumatoriaHoras + Number($horas);
    sumatoriaMinutos = sumatoriaMinutos + Number($minutos);
    sumatoriaSegundos = sumatoriaSegundos + Number($segundos);

    const mostrarTiempo = document.querySelector('#sumaTiempo');
    mostrarTiempo.innerText = `${sumatoriaHoras}: ${sumatoriaMinutos}: ${sumatoriaSegundos}`;
    return false
}