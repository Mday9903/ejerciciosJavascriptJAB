//Tenemos cuatro botones y les vamos a asignar distintas funciones a cada uno.

//Queremos que la primera función que ejecute apenas se cargue la página sea Inicio.
window.onload=inicio;


function inicio(){
    document.querySelector("#button1").onclick = accion1;
    document.querySelector("#button2").onclick = accion2;
    document.querySelector("#button3").onclick = accion3;
    document.querySelector("#button4").onclick = accion4;
   
}

//El primer botón escribe en el div "Hola Mundo".
function accion1(){
    document.querySelector("#box").innerHTML="Hola Mundo";
}

//El segundo botón inserta una imágen en el div.
function accion2(){
    document.querySelector("#box").innerHTML="<img src='./ejercicio1/html5.png'>";
}
//El tercer botón inserta otro botón a continuación del contenido dentro del div.
function accion3(){
    document.querySelector("#box").insertAdjacentHTML("beforeend","<button>Otro botòn</button>");
}
//El cuarto botón vacía el div.
function accion4(){
    document.querySelector("#box").innerHTML="";
}

