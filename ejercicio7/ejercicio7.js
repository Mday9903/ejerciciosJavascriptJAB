window.onload = inicio;
let rojo = "https://www.html6.es/img/rojo.png";
let azul = "https://www.html6.es/img/azul.png";
let caja = document.querySelector("#caja");
let arrayCaja = document.querySelectorAll(".box > img");

function inicio() {
  indice = 0;
  document.querySelector(".boton-rojo").onclick = agregarRojo;
  document.querySelector(".boton-azules").onclick = agregarAzules;
  document.querySelector(".boton-mod-azules").onclick = modificarAzules;
  document.querySelector(".boton-elim-rojos").onclick = eliminarRojos;


    
  
  document.querySelector(".boton-vaciar").onclick = vaciar;
};

function agregarRojo(){
    caja.insertAdjacentHTML("beforeend", `<img class="rojo" src="${rojo}">` );
};


function agregarAzules(){
    for (let i=0; i<4; i++){
    caja.insertAdjacentHTML("beforeend", `<img class="azul" src="${azul}">` );
    };   
};

function modificarAzules(){
    let contar = document.querySelectorAll(".azul").length;
    for (let i=contar-1; i>=0; i--){
        document.querySelectorAll(".azul")[i].src = rojo;
        // document.querySelectorAll(".azul")[i].className = "rojo";
        document.querySelectorAll(".azul")[i].setAttribute("class","rojo");
    }
    // for (let i=0; i<=contar; i++){
    //     document.querySelectorAll(".azul")[0].src = rojo;
    //     document.querySelectorAll(".azul")[0].setAttribute("class","rojo");
    // }
}

function eliminarRojos(){
    let contar = document.querySelectorAll(".rojo").length;
    for (let i=contar-1; i>=0; i--){
        document.querySelectorAll(".rojo")[i].remove();
    }
    // for (let i=0; i<=contar; i++){
    //     document.querySelectorAll(".rojo")[0].remove();
    // }
}


function vaciar(){
    caja.innerHTML = "";
}
