var max = 2000;

var dinero = (Math.floor(Math.random() * max) + 1) / 100;

var monedas = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

console.log("Dinero -> " + dinero);

var monederoFinal = pasoMonedas(dinero, monedas);

for (let i = 0; i < monederoFinal.length; i++) {
  console.log("Monedas de " + monedas[i] + " -> " + monederoFinal[i]);
}

function pasoMonedas(dinerete, monedas) {

  var monedero = [0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < monedas.length && dinerete != 0; i++) {

    if (dinerete % monedas[i] == 0) {
        monedero[i] = dinerete / monedas[i];
        dinerete = 0;
    } 
    
    else {

      while (dinerete - monedas[i] >= 0) {
        dinerete = dinerete - monedas[i];
        monedero[i]++;
      }

    }

  }
//
//Hay un problema con los ultimos decimales por lo que hago directamente la conversion del ultimo centimo
  if (dinerete > 0.001){
    if (monedero[monedero.length-1] == 1){
      monedero[monedero.length-1]--;
      monedero[monedero.length-2]++;
    }
    else{
      monedero[monedero.length-1]++;

      if (monedero[monedero.length-1] == 1 && monedero[monedero.length-2] == 2){
        monedero[monedero.length-1] = 0;
        monedero[monedero.length-2] = 0;
        monedero[monedero.length-3] = 1;
      }
    }
  }

  return monedero;

}
