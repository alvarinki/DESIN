
var posibilidades = ["Piedra", "Papel", "Tijera"];

var p1 = posibilidades[getRandomInt(3)];

var p2 = posibilidades[getRandomInt(3)];

console.log("p1: " + p1 + "\np2: " + p2 + "\n");

var resultado = getResutado(p1, p2);

console.log(resultado);

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getResutado(jugador1, jugador2){

    j1 = "El ganador es el jugador 1";
    j2 = "El ganador es el jugador 2"

    if (jugador1 == jugador2){
        return "Empate";
    }
    else{
        switch (jugador1){
            case "Papel": {
                if (jugador2 == posibilidades[0]){
                    return j1;
                }
                else{
                    return j2;
                }
            }
            case "Piedra": {
                if (jugador2 == posibilidades[2]){
                    return j1;
                }
                else{
                    return j2;
                }
            }
            case "Tijera": {
                if (jugador2 == posibilidades[1]){
                    return j1;
                }
                else{
                    return j2;
                }
            }
        }
    }
}