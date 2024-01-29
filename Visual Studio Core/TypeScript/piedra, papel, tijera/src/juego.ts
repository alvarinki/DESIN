
type Jugada = "piedra" | "papel" | "tijera";

function comprobarGanador(j1: Jugada, j2: Jugada): string {
    if (j1 === j2) {
        return "Empate";
    } else {
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

function mostrarResultado(j1: Jugada, j2: Jugada): void {
    console.log(`Jugador 1: ${j1} Jugador 2: ${j2}`);
    console.log(comprobarGanador(j1, j2));
}

const j1: Jugada = "papel";
const j2: Jugada = "tijera";

mostrarResultado(j1, j2);

  