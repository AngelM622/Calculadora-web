var primerNumero;
var segundoNumero; 
var Resultado;
var operacion;
var clave;
var mostrar;
var numEliminar;

function sumar(){
    primerNumero= document.getElementById("primerNumero").value;
    segundoNumero = document.getElementById("segundoNumero").value;
    Resultado = document.getElementById("resultado");
    comprobar_num();

    var suma = parseFloat(primerNumero) + parseFloat(segundoNumero);
    operacion= Resultado.innerHTML = "El resultado de " +primerNumero + "+" +segundoNumero + " es igual a " + suma;  
    limpiar_caja();
    guardar_operacion();
}

function restar(){
    primerNumero= document.getElementById("primerNumero").value;
    segundoNumero = document.getElementById("segundoNumero").value;
    Resultado = document.getElementById("resultado");
    comprobar_num();

    var resta = parseFloat(primerNumero) - parseFloat(segundoNumero);
    operacion= Resultado.innerHTML = "El resultado de " +primerNumero + "-" +segundoNumero + " es igual a " + resta;
    limpiar_caja();
    guardar_operacion();
}

function multiplicar(){
    primerNumero= document.getElementById("primerNumero").value;
    segundoNumero = document.getElementById("segundoNumero").value;
    Resultado = document.getElementById("resultado");
    comprobar_num();

    var multiplicacion = parseFloat(primerNumero) * parseFloat(segundoNumero);
    operacion= Resultado.innerHTML = "El resultado de " +primerNumero + "X" +segundoNumero + " es igual a " + multiplicacion;
    limpiar_caja();
    guardar_operacion();
}

function dividir(){
    primerNumero= document.getElementById("primerNumero").value;
    segundoNumero = document.getElementById("segundoNumero").value;
    Resultado = document.getElementById("resultado");
    comprobar_num();

    var division = parseFloat(primerNumero) / parseFloat(segundoNumero);
    operacion= Resultado.innerHTML = "El resultado de " +primerNumero + "/" +segundoNumero + " es igual a " + division;
    limpiar_caja();
    guardar_operacion();
}

function guardar_operacion(){
    for (let a = 0; a < localStorage.length+1; a++) {
        clave = a+1; 
    }
    localStorage.setItem(clave,operacion);
    mostrar_operacion();
}

function mostrar_operacion(){
    limpiar_caja();
    mostrar = document.getElementById("mostrar_resultados");
    

    for (let b = 1; b < localStorage.length+1; b++) {
        var valor=localStorage.getItem(b); 
        mostrar.innerHTML+='<div>'+b+' - '+valor+'</div>';
        
        }

    }


function limpiar_caja(){
    mostrar = document.getElementById("mostrar_resultados").innerHTML ="";
}

function comprobar_num(){
    if (primerNumero.length == 0 || segundoNumero.length == 0){
        alert("Ingrese un numero valido.");
        throw new Error("Ingrese un numero valido.");
    }
}

function eliminar(){
    localStorage.clear();
    limpiar_caja();
}