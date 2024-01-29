"use strict";

function comprobarGanador(j1, j2) {
    if (j1 === j2) {
        return "Empate";
    }
    else {
        switch (j1) {
            case "tijera":
                return j2 === "piedra" ? "Gana el jugador 2" : "Gana el jugador 1";
            case "papel":
                return j2 === "tijera" ? "Gana el jugador 2" : "Gana el jugador 1";
            case "piedra":
                return j2 === "papel" ? "Gana el jugador 2" : "Gana el jugador 1";
            default:
                return "Opción no válida";
        }
    }
}

function mostrarResultado(j1, j2) {
    console.log("Jugador 1: ".concat(j1, " Jugador 2: ").concat(j2));
    console.log(comprobarGanador(j1, j2));
}
// Ejemplo de uso
var j1 = "papel";
var j2 = "tijera";
mostrarResultado(j1, j2);
