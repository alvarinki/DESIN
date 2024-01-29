
var posibilidades = ["Piedra", "Papel", "Tijera"];

var p1 = posibilidades[getRandomInt(3)];

var p2 = posibilidades[getRandomInt(3)];

console.log("p1: " + p1 + "\np2: " + p2 + "\n");

if (p1 == p2){
    console.log("Empate");
}
else{
    switch (p1){
        case "Papel": {
            if (p2 == posibilidades[0]){
                console.log("El ganador es p1");
            }
            else{
                console.log("El ganador es p2");
            }
            break;
        }
        case "Piedra": {
            if (p2 == posibilidades[2]){
                console.log("El ganador es p1");
            }
            else{
                console.log("El ganador es p2");
            }
            break;
        }
        case "Tijera": {
            if (p2 == posibilidades[1]){
                console.log("El ganador es p1");
            }
            else{
                console.log("El ganador es p2");
            }
            break;
        }
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}