function valorNombre(){
    const $form = document.querySelector("#carta-a-santa");
    const $nombre = $form.nombre.value;
    return $nombre;
}
function valorCiudad(){
    const $form = document.querySelector("#carta-a-santa");
    const $ciudad = $form.ciudad.value;
    return $ciudad;
}
function valorComportamiento(){
    const $form = document.querySelector("#carta-a-santa");
    const $comportamiento = $form.comportamiento.value;
    return $comportamiento;
}
function valorDescripcionRegalo(){
    const $descripcionRegalo = document.querySelector("#carta-a-santa [name=descripcion-regalo]").value;
    return $descripcionRegalo;
}

function mostrarEnConsolaValores(){
    console.log(valorNombre());
    console.log(valorCiudad());
    console.log(valorComportamiento())
    console.log(valorDescripcionRegalo())
}

const $botonEnviarCarta = document.querySelector("#enviar-carta");
$botonEnviarCarta.onclick = enviarCarta;
function enviarCarta(){
    //mostrarEnConsolaValores();
    if(validarForm()){
        console.log("Todo bien")
    }

    return false;
}

function validarForm(){
    const nombre = valorNombre();
    const ciudad = valorCiudad();
    const descripcionRegalo = valorDescripcionRegalo();
    
    validarNombre(nombre)==="" 
    validarCiudad(ciudad)==="" 
    validarDescripcionRegalo(descripcionRegalo)
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return "Tiene que vivir en alguna ciudad";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return "La descripcion no puede estar vacia"
    }
    return "";
}

function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    if(nombre >=50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    const contieneSoloLetras = /^[A-z]+$/.test(nombre);
    if(!contieneSoloLetras){
        return "Este campo debe tener solo letras";
    }
    return "";
}