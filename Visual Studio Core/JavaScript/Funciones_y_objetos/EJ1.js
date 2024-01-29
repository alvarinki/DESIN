var nombre = "Alvaro"
var apellidos = "Candanedo Fernandez"
var completo=nombre +" "+apellidos
var longitud= completo.replaceAll(" ","").length
console.log("Longitud: "+longitud)

console.log(completo.toUpperCase())

console.log(completo.toLowerCase())

console.log("Nombre: "+nombre)
var apellidosDivididos=apellidos.split(" ")
console.log("Apellido 1: "+apellidosDivididos[0])
console.log("Apellido 2: "+apellidosDivididos[1])

var separado = completo.slice(" ")

console.log(function usuario1(separado){
    var separado=completo.split(" ")
    var usuario1= separado[0]
    for (var i=1; i<separado.length; i++){
        usuario1+= separado[i].charAt(0)
    }
    return usuario1
})


