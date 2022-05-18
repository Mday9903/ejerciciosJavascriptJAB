window.onload = inicio;

function inicio () {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);

    document.querySelector("#input1").value = num1;
    document.querySelector("#input2").value = num2;

    document.querySelector("#input3").value= "";
    document.querySelector("#input3").focus();

    document.querySelector("#calc-button").onclick = add;
    document.querySelector("#input3").onkeydown = keyboard;

}

const add = () => {
   let result = Number(document.querySelector("#input1").value) + Number(document.querySelector("#input2").value); 
   let userResult = document.querySelector("#input3").value;

   if (result == userResult) {
        document.querySelector("#board").insertAdjacentHTML("beforeend", "<div class='green'>Correcto</div>");

   } else {
        document.querySelector("#board").insertAdjacentHTML("beforeend", "<div class='red'>Incorrecto, el resultado de: " + num1 + " + " + num2 + " es " + result + ".</div>");
    }
   
   inicio();
}

const keyboard = (keyPulsed) => {
    if (keyPulsed.key === "Enter" ){
        add();
    } 
}