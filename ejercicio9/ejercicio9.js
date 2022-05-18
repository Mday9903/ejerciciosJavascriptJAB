// indexOf(valor)
// splice(index,cuantasPosicionesBorrar)

// toLowerCase()
// toUpperCase()

// subtring(index,cuantasPosicionesTomar)

window.onload=begin;

let nameList = ["gabriel"];


function begin(){
    document.querySelector(".button-add").onclick = add;
}

function add(){
    nameEntry = document.querySelector(".input-name").value;
    nameEntry = nameEntry.toLowerCase();

    if (nameList.length === 0){
        nameList.push(nameEntry);
        load();
    } else{
        for(let i=0; i < nameList.length; i++){
            let index = nameList.indexOf(nameEntry);
            console.log(index);
    
            if (index === -1){
                load();
            }
        }   
    }
console.log(nameList);
}




function load(){
    nameList.push(nameEntry);
    let mayus = nameEntry.toUpperCase();
    mayus = mayus.substr(0,1);
    let minus = nameEntry.substr(1,nameEntry.length);
    let correctname = mayus + minus; 
    document.querySelector(".board").insertAdjacentHTML("beforeend",`<span>${correctname}</span>`);
}