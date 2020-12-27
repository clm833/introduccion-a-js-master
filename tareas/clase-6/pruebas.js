/*
function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();
*/

console.log('ejecutando pruebas');

function probarCalcularPromedio() {
    console.assert( 
        calcularPromedio([10,20],0) == 15,
        'calcularPromedio no promedia'
        );
}

probarCalcularPromedio();

function probarValidarCantidad() {
    console.assert(
        validarEnteroPositivo('10.8') === 'Ingresar un número entero positivo',
        'validarCantIntegrantes no valida decimales'
    )
    console.assert(
        validarEnteroPositivo(-10) === 'Ingresar un número entero positivo',
        'validarCantIntegrantes no valida negativos'
    )
    console.assert(
        validarEnteroPositivo('a') === 'Ingresar un número entero positivo',
        'validarCantIntegrantes no valida letras'
    )
    console.assert(
        validarEnteroPositivo(21, 20) === 'Ingrese un número menor a 20',
        'validarCantIntegrantes no valida entradas correctas'
    )
    console.assert(
        validarEnteroPositivo(20, 20) === '',
        'validarCantIntegrantes no valida entradas correctas'
    )
}

probarValidarCantidad();
