window.onload = inicio;

let veces = 0;
let bt;


function inicio() {
    bt = document.querySelector(".boton");
    fase0();
    bt.onclick = modificar;
  
}


function modificar(){
    veces ++;
    if (veces === 1){
        document.querySelector(".precio").innerHTML = "5€";
        document.querySelector(".descripcion").innerHTML = "Café para llevar";
        document.querySelector(".imagen img").src="./cafe2.png";
        bt.classList.add("fase1");
    } else if (veces === 2){
        document.querySelector(".precio").innerHTML = "10€";
        document.querySelector(".descripcion").innerHTML = "Desayuno con cookies";
        document.querySelector("section").insertAdjacentHTML("beforeend",`<div class="imagen2"><img src="./pasta.png"></div>`)
        bt.classList.add("fase2");
    } else{
        bt.classList.remove("fase1");
        bt.classList.remove("fase2");
        fase0(); 
        
    }
}

function fase0(){
    document.querySelector(".boton").innerHTML =
        `   <section>
            <div class="precio"></div>
            <div class="imagen"></div>
            </section>
            <div class="descripcion"></div>
        </div>`
      ;
    document.querySelector(".precio").innerHTML = "2€";
    document.querySelector(".imagen").innerHTML = `<img src="./cafe1.png" alt="">`;
    document.querySelector(".descripcion").innerHTML = "Café de Colombia";
    bt.classList.add("fase0");
}

// function fase1(){
//     document.querySelector(".precio1").innerHTML = "7€";
//     // document.querySelector(".precio1").className = "precio2";
//     document.querySelector(".imagen").innerHTML = `<img src="./cafe2.png">`;
//     document.querySelector(".descripcion").innerHTML = "Café para llevar";
//     // document.querySelector(".boton-cafe1").className = "boton-cafe2";
//     bt.classList.add("fase1");
// }

// function fase2(){
//     document.querySelector(".precio2").innerHTML = "10€";
//     document.querySelector(".precio2").className = "precio3";
//     document.querySelector(".imagen").innerHTML = `<img src="./cafe2.png">`;
//     document.querySelector(".imagen").className = "image";

//     document.querySelector("section").insertAdjacentHTML("beforeend",`<img class="img2" src="./pasta.png">`);
//     document.querySelector(".descripcion").innerHTML = "Café para llevar con cupcake";
//     document.querySelector(".boton-cafe2").className = "boton-cafe3";
//     // bt.classList.add("fase3");
// }