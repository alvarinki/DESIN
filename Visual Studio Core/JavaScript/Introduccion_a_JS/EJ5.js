
var opciones=["piedra", "papel", "tijera"]

var jugador1= opciones[1]
var jugador2=opciones[2]

const jugadas={
    j1:jugador1,
    j2:jugador2
}
function obtenerGanador(jugadas){
if(jugadas["j1"]==jugadas["j2"]) return "Empate"
else{
switch(jugadas["j1"]){
    case "tijera":{
        if(jugadas["j2"]=="piedra") return "Gana el jugador 2"
        else return "Gana el jugador 1"
        
    }
    case "papel":{
        if(jugadas["j2"]=="tijera") return "Gana el jugador 2"
        else return "Gana el jugador 1"
        
    }
    case "piedra":{
        if(jugadas["j2"]=="papel") return "Gana el jugador 2"
        else return "Gana el jugador 1"
        
    }
}

}
}

var ganador=obtenerGanador(jugadas)
console.log(ganador)