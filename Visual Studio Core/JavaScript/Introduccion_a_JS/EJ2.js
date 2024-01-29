
var opciones=["piedra", "papel", "tijera"]

var jugador1= opciones[1]
var jugador2=opciones[2]

if(jugador1==jugador2) console.log("Empate")
else{
switch(jugador1){
    case "tijera":{
        if(jugador2=="piedra") console.log("Gana el jugador 2")
        else console.log("Gana el jugador 1")
        break;
    }
    case "papel":{
        if(jugador2=="tijera") console.log("Gana el jugador 2");
        else console.log("Gana el jugador 1")
        break;
    }
    case "piedra":{
        if(jugador2=="papel") console.log("Gana el jugador 2")
        else console.log("Gana el jugador 1")
        break;
    }
}
console.log("Jugador 1: "+jugador1+" Jugador 2: "+jugador2)
}
