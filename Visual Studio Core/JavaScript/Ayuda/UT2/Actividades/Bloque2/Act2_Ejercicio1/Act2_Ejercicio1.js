var nombre = prompt("Introduzca su nombre");
var apellidos = prompt("Introduzca sus apellidos");
var nombreCompleto = nombre + " " + apellidos;


alert("Longitud del nombre sin contar espacios\n" + longCadena(nombreCompleto));

alert("La cadena en mayusculas\n" + nombreCompleto.toUpperCase());

alert("El nombre separado:\n\tNombre: " + separarNombre(nombreCompleto)[0] + 
    "\n\tApellido 1: " + separarNombre(nombreCompleto)[1]+ 
    "\n\tApellido 2: " + separarNombre(nombreCompleto)[2]
);

alert("Propuesta de nombre de usuario nº1:\n" + sugerirUsuario1(nombreCompleto));

alert("Propuesta de nombre de usuario nº2:\n" + sugerirUsuario2(nombreCompleto));


function longCadena(cadena){
    cadenaSinEspacios = cadena.replaceAll(" ", "");
    return cadenaSinEspacios.length;
}

function separarNombre(cadena){
    return cadena.split(" ");
}

function sugerirUsuario1(cadena){
    var cadenaSeparada = separarNombre(cadena);
    var usuario = cadenaSeparada[0];

    for (let i = 1; i < cadenaSeparada.length; i++){
        usuario += cadenaSeparada[i].charAt(0);
    }

    return  usuario;
}

function sugerirUsuario2(cadena){
    var cadenaSeparada = separarNombre(cadena);
    var usuario = "";

    for (let i = 0; i < cadenaSeparada.length; i++){
        usuario += cadenaSeparada[i].substr(0, 2);
    }

    return  usuario;
}