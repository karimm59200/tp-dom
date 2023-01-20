// function add(){

// }

// function sous(){

// }

// function mult(){

// }

// function div(){

// }

//document.addEventListener("keypress", () => {
  //     console.log("Une touche a été pressée ! keypress")

let resultat = 0 ;

let touche = document.querySelectorAll("div");
//console.log(touche);

let result = Number(document.getElementById("result"))
result.innerHTML = resultat
//console.log( typeof result);
//console.log(result);

const touches = [...document.querySelectorAll('div')];
//console.log(touches);
const listKeyCode = touches.map(touche => touche.dataset.name);
console.log(listKeyCode[0]);
//console.log(listKeyCode);


document.getElementById("result").textContent = 5
console.log()