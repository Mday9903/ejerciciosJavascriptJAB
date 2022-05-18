window.onload=inicio;

function inicio(){
    document.querySelector("body").insertAdjacentHTML("beforeend",
    `<main id="main">
    <section>
        <input id="text-box" type="text">
        <button id="main-button">Botón</button>
    </section>
    <div id="div"></div>
</main>`);
    document.querySelector("#main-button").onclick = text;
};


const text = () => {
    const correctName = "marcos";
    let name = (document.querySelector("#text-box").value).toLowerCase();
    let div = document.querySelector("#div");
    
    if (name === correctName) {
        nameFixed = name.substr(0,1).toUpperCase() + name.substr(1,name.length-1).toLowerCase();
        div.innerHTML = "Hola " + nameFixed + '<button id="web-button">Ir a la  web</button>';
        document.querySelector("#web-button").onclick = toWeb;
        
        document.querySelector("#text-box").focus();
    } else{
        div.innerHTML = "";
        document.querySelector("#text-box").value= "";
        document.querySelector("#text-box").focus();
    
    }
};

const toWeb = () => {
    location.href = "https://edwininmobiliaria.com/";
}