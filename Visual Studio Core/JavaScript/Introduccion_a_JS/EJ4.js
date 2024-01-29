
var opciones=["piedra", "papel", "tijera"]

var j1= opciones[1]
var j2=opciones[2]

function obtenerGanador(j1, j2){
if(j1==j2) return "Empate"
else{
switch(j1){
    case "tijera":{
        if(j2=="piedra") return "Gana el jugador 2"
        else return "Gana el jugador 1"
        
    }
    case "papel":{
        if(j2=="tijera") return "Gana el jugador 2"
        else return "Gana el jugador 1"
        
    }
    case "piedra":{
        if(j2=="papel") return "Gana el jugador 2"
        else return "Gana el jugador 1"
        
    }
}

}
}

var ganador=obtenerGanador(j1, j2)
console.log(ganador)