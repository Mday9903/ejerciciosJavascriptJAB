//Modificaremos con Javascript los estilos CSS.

window.onload=inicio;


function inicio(){
    document.querySelector("#button1").onclick = accion1;
    document.querySelector("#button2").onclick = accion2;
    document.querySelector("#button3").onclick = accion3;
}

//El primer botón le coloca a la imágen un fondo redondeado y azul, con un leve giro.

function accion1(){
    document.querySelector("#box").style.visibility = "visible";
    document.querySelector("#box").innerHTML='<img src="/ejercicio1/html5.png">';
    document.querySelector("#box").style.width="60%";
    document.querySelector("#box").style.backgroundColor = "#1162ac";
    document.querySelector("#box").style.paddingLeft = "1.2rem";
    document.querySelector("#box").style.marginLeft = "12rem";
    document.querySelector("#box").style.borderRadius = "50%";
    document.querySelector("#box").style.transform = "rotate(10deg)";
    
}

//El segundo botón oculta la imágen.

function accion2(){
    document.querySelector("#box").style.visibility = "hidden";

}

//El tercer botón resetea las propiedades CSS y centra la imágen.

function accion3(){
    document.querySelector("#box").style.visibility = "visible";
    document.querySelector("#box").innerHTML='<img src="/ejercicio1/html5.png">';
    document.querySelector("#box").style.width=null;
    document.querySelector("#box").style.backgroundColor = null;
    document.querySelector("#box").style.paddingLeft = null;
    document.querySelector("#box").style.marginLeft = null;
    document.querySelector("#box").style.display = "flex";
    document.querySelector("#box").style.justifyContent = "center";
    document.querySelector("#box").style.borderRadius = null;
    document.querySelector("#box").style.transform = null;
}