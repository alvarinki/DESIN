
var paraSacar = [true, 1, "Casa", function() {}];

function sacarTipos(array) {
    return array.map(dato => typeof dato);
  }
  
  console.log(sacarTipos(paraSacar)); 
