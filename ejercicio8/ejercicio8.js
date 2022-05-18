// Si quieres usar la mism imagen de la moneda de la actividad usa esta URL
let urlDeLaMoneda="https://www.html6.es/img/moneda.png";

window.onload=inicio;

let numero;
let coincidencia = 0;
let oportunidades = 5;
let apuesta = false;

    function inicio(){

        document.querySelector(".monedas").insertAdjacentHTML("beforeend",`<span>${oportunidades}</span>`)

        for(let k=0; k < oportunidades; k++){
            document.querySelector(".img-monedas").insertAdjacentHTML("beforeend",
            `<img src="${urlDeLaMoneda}">`);
        };

        document.querySelector(".boton").onclick = apostar;
    }    

function apostar(){

    //-------------------  Limpio el div contenido para una nueva apuesta -----------------

    limpiarCampo();

    //-------------------  Obtengo el número ingresado por el usuario -----------------

    numero = document.querySelector("#campo").value;


    //-------------------  Verifico que el número ingresado sea correcto -----------------
    
    if ( numero < 2 || numero > 9 ){

        document.querySelector("#campo").value = "";
        document.querySelector("#campo").focus();
        document.querySelector(".informacion").innerHTML = "El número ingresado es incorrecto. Por favor ingresa un número entre el 2 y el 9.";
       
    } else {

            apuesta = true;
 //-------------------  Genero los números aleatorios y los muestro -----------------

        generarNumeros();

 //-------------------  Modifico las monedas disponibles -----------------

        monedasDisponibles();

 //-------------------  Muestro la información sobre el resultado de la apuesta -----------------
        if (coincidencia === 0 && apuesta){
            document.querySelector(".informacion").innerHTML = "No se ha producido ninguna coincidencia y has perdido " + numero + " monedas";

        } else if (coincidencia === 1){
            document.querySelector(".informacion").innerHTML = "Se ha producido 1 coincidencia y has ganado 1 moneda.";
            coincidencia = 0;
        } else if (coincidencia > 0) {
            document.querySelector(".informacion").innerHTML = "Se han producido " + coincidencia + " coincidencias y has ganado " + coincidencia + " monedas.";
            coincidencia = 0;
        };


    };
};




function limpiarCampo(){
        let rojos = document.querySelectorAll(".circulo-rojo").length;

        for (let h=0; h < rojos; h++){
            document.querySelectorAll(".circulo-rojo")[0].remove();
        };
}

function generarNumeros(){
        for (let i=0; i<numero; i++){
            let numeroRandom = Math.floor(Math.random() * numero);
            numeroRandom ++;
            if (numero == numeroRandom ){
                coincidencia ++;
                document.querySelector(".contenido").insertAdjacentHTML("beforeend",
                `<div class="circulo-verde">${numeroRandom}</div>`);
            } else{
                document.querySelector(".contenido").insertAdjacentHTML("beforeend",
                `<div class="circulo-rojo">${numeroRandom}</div>`);
            }
        }
}




function monedasDisponibles (){
    let monedasImg = document.querySelectorAll(".img-monedas img").length;
    
    if (monedasImg > 0 && numero <= oportunidades && coincidencia == 0){
        for (let i=0; i<numero; i++){
            document.querySelectorAll(".img-monedas img")[0].remove();
            oportunidades --; 
        }
    } else if ((monedasImg > 0 && numero > oportunidades && coincidencia == 0)){
        for (let i=0; i<monedasImg; i++){
            document.querySelectorAll(".img-monedas img")[0].remove();
        }     
        oportunidades -= numero;
    } else if (coincidencia > 0 && oportunidades > 0 ){
        for (let i=0; i<coincidencia; i++){
            document.querySelector(".img-monedas").insertAdjacentHTML("beforeend",
            `<img src="${urlDeLaMoneda}">`);
            oportunidades ++;
        } 
    }else if(coincidencia > 0 && oportunidades <= 0){
            oportunidades ++;
    }else if(coincidencia === 0 && oportunidades <= 0){  
            oportunidades -= numero;  
    }else if (numero > monedasImg){
            for (let i=0; i<monedasImg; i++){
                document.querySelectorAll(".img-monedas img")[0].remove();
                oportunidades --;
            }
    } 
    console.log(oportunidades);
    document.querySelector("span").textContent = oportunidades;
}