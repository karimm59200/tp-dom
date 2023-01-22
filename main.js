


//document.addEventListener("keypress", () => {
//     console.log("Une touche a été pressée ! keypress")

let resultat = 0;
let calculToDisplay = "";
let calcul = "";

// let touche = document.querySelectorAll(".touche");
//console.log(touche);

let result = (document.getElementById("result"));
result.innerHTML = resultat;
//console.log( typeof result);
//console.log(result);

const touches = [...document.querySelectorAll(".touche")];
console.log(touches);
touches.forEach((touche) => {
  if (touche.getAttribute("data-name") === "=") {
    touche.addEventListener("click", resultOfCalcul);
  } else if (touche.getAttribute("data-name") === "c") {
    touche.addEventListener("click", () => {
      calcul = "";
      calculToDisplay = "";
      console.log("reset: c");
      displayCalcul();
    });
  } else if (touche.getAttribute("data-name")=="%"){
    touche.addEventListener("click", () => {
      let pourCent = eval(calcul/100);
      document.getElementById("result").textContent = pourCent;
      console.log("pour cent");
    } )
  }
   else {
    touche.addEventListener("click", () => {
      calcul += touche.dataset.name;
      console.log(typeof Number(calcul));
      displayCalcul();
    });
  }
});
//console.log(touches);
//const listKeyCode = touches.map(touche => touche.dataset.name);
//console.log(listKeyCode[1]);
//console.log(listKeyCode);

function displayCalcul() {
  calculToDisplay = calcul.replaceAll("*", "x") && calcul.replaceAll(".", ",");
  document.getElementById("result").textContent = calculToDisplay;
}

function reset() {
  calcul = "";
  // document.getElementById("result").textContent = "";
}

function resultOfCalcul(key) {
  //console.log(eval(calcul));
  try {

    document.getElementById("result").textContent = key == "%" ? eval(calcul/100): eval(calcul);
    reset();
  } catch (error) {
    alert("Action impossible veuillez vérifier votre calcul \n" + error);
    document.getElementById("result").textContent =  "";//error;
    console.log(error)
  }
}


// console.log()



document.addEventListener("keypress", (event) => {
      //console.log("Une touche a été pressée ! keypress")
      
      document.getElementById("result").textContent = event.key;
      console.log(event.key)
      
      if( event.key == "=" || event.key =="%"){
        resultOfCalcul(event.key); 
        console.log("coucou");
      } else {
        calcul += event.key;
        console.log(calcul);
        displayCalcul(calcul);
      }
  })
  
  
  
  