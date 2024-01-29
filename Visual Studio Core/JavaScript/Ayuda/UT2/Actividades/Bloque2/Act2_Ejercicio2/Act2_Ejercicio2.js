var diaCumple = prompt("¿Cual es el dia de tu cumpleanos?");
var mesCumple = prompt("¿Cual es el mes de tu cumpleanos?");

mesCumple--;

var hoy = new Date();

var fechaCumple = new Date();

if (mesCumple < hoy.getMonth() || (mesCumple == hoy.getMonth() && diaCumple < hoy.getDate())){
    
    fechaCumple = new Date(hoy.getFullYear() + 1, mesCumple , diaCumple, 
        hoy.getHours(), hoy.getMinutes(), hoy.getSeconds(), hoy.getMilliseconds()
    );
    
} else{

    fechaCumple = new Date(hoy.getFullYear(), mesCumple , diaCumple, 
        hoy.getHours(), hoy.getMinutes(), hoy.getSeconds(), hoy.getMilliseconds()
    );

}

alert("Faltan " + infoCumple(fechaCumple, hoy) + " para tu cumpleanyos");

var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

alert(diasSemana[fechaCumple.getDay()]);

function infoCumple(date, hoy){

    var milisec = date.getTime() - hoy.getTime();

    var secs = milisec / 1000;

    var mins = secs / 60;

    var hors = mins / 60;

    var dis = hors / 24;

    return Math.round(dis);

} 