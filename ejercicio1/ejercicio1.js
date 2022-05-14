window.onload=inicio;


function inicio(){
    document.querySelector("#button1").onclick = accion1;
    document.querySelector("#button2").onclick = accion2;
    document.querySelector("#button3").onclick = accion3;
    document.querySelector("#button4").onclick = accion4;
   
}

function accion1(){
    document.querySelector("#text-box").innerHTML="Hola Mundo";
}

function accion2(){
    document.querySelector("#text-box").innerHTML="<img src='./ejercicio1/html5.png'>";
}

function accion3(){
    document.querySelector("#text-box").insertAdjacentHTML("beforeend","<button>Otro botòn</button>");
}

function accion4(){
    document.querySelector("#text-box").innerHTML="";
}

