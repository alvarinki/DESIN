
var posibilidades = ["Piedra", "Papel", "Tijera"];

var max = 3;

let jugadas = {
    jugadorA : posibilidades[Math.floor(Math.random() * max)],
    jugadorB : posibilidades[Math.floor(Math.random() * max)]
}

console.log("Jugador 1: " + jugadas.jugadorA + "\nJugador 2: " + jugadas.jugadorB + "\n");

console.log(getResutado(jugadas));

function getResutado(jugadas){

    j1 = "El ganador es el jugador 1";
    j2 = "El ganador es el jugador 2"

    if (jugadas.jugadorA == jugadas.jugadorB){
        return "Empate";
    }
    else{
        switch (jugadas.jugadorA){
            case "Papel": {
                if (jugadas.jugadorB == posibilidades[0]){
                    return j1;
                }
                else{
                    return j2;
                }
            }
            case "Piedra": {
                if (jugadas.jugadorB == posibilidades[2]){
                    return j1;
                }
                else{
                    return j2;
                }
            }
            case "Tijera": {
                if (jugadas.jugadorB == posibilidades[1]){
                    return j1;
                }
                else{
                    return j2;
                }
            }
        }
    }
}

