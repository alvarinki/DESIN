
const array = [1, 2, 3, 7, 4];

function numeroDesordenado(a) {
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        return i;
      }
    }
    return -1;
  }
  
  
  console.log(numeroDesordenado(array));
  