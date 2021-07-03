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
  console.assert(
      validarNombre("asd123")==="Este campo debe tener solo letras",
      "Validar nombre no valido que tenga solo letras",
  )
}

function probarValidarCiudad(){
    console.assert(validarCiudad("") === 
    "Tiene que vivir en alguna ciudad", 
    "ValidarCiudad no puede estar vacios",
    )
}

function probarValidarDescripcion(){
    console.assert(validarDescripcionRegalo("") ===
    "La descripcion no puede estar vacia",
        "ValidarDescripcionRegalo no valida que el regalo no sea vacio",
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();