
const paises = ["Argentina", "Brasil", "México", "España", "Francia"];

function conForOf() {
  for (var p of paises) {
    console.log(p);
  }
}

function alReves() {
  paises.reverse().forEach(p => console.log(p));
}

function OrdenAlfabetico() {
  paises.sort().forEach(p => console.log(p));
}

function agregarAlPrincipio(p) {
  paises.unshift(p);
}

function agregarAlFinal(p) {
  paises.push(p);
}

function borrarAlPrincipio() {
  var paisBorrado = paises.shift();
  console.log("País borrado al comienzo: "+paisBorrado);
}

function borrarAlFinal() {
  var paisBorrado = paises.pop();
  console.log("País borrado al comienzo: "+paisBorrado);
}

console.log("Mostrar con for..of:");
conForOf();

console.log("\nMostrar en sentido inverso:");
alReves();

console.log("\nMostrar en orden alfabético:");
OrdenAlfabetico();

console.log("\nAgregar al comienzo: ");
agregarAlPrincipio("Chile");
mostrarConForOf();

console.log("\nAgregar al final: ");
agregarAlFinal("Italia");
mostrarConForOf();

console.log("\nBorrar al comienzo:");
borrarAlPrincipio();
mostrarConForOf();

console.log("\nBorrar al final:");
borrarAlFinal();
mostrarConForOf();
