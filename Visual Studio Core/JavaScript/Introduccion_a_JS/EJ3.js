var num= 3405

function numeroCifras(num){

    var dividendo= num
    var contadorCifras=0

    while(dividendo>=1){
        dividendo= dividendo/10
        contadorCifras++
    }

    return contadorCifras
}

console.log("Número de cifras del número "+num+": "+numeroCifras(num))