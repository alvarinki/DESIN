var numero = prompt("Introduce el número del que deseas contar sus cifras: ");

function contarDigitos(numero){

     var resto = numero;
     var contador = 0;
     
     while (resto >= 1) {
     
          resto = resto / 10; 
          contador++;
     
     }

     return contador;

}

console.log("El numero " + numero + " tiene " + contarDigitos(numero) + " digitos");