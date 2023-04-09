import { KUTYALISTA, KUTYAKULCS} from "./adat.js";
import  { osszeallit2 } from "./adatkezeles.js";
// import  { rendezesBarmiSzerint} from "./rendezesSzures.js";
window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;

function init() {
  // rendezesBarmiSzerint(KUTYALISTA, "kor", -1)
  //   console.log()
  
  ARTICLE = document.querySelector("article");
  let tablazat = document.querySelector("article section");
  tablazat.innerHTML = osszeallit2(KUTYALISTA)
  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", UjKutya);


  
}

function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index+1].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  let tablazat = document.querySelector("article section");
  tablazat.innerHTML = osszeallit2(KUTYALISTA)
  console.log("test")
  torlesGomb();
}


function UjKutya() {

  const kutya= {};

  /**szedjük össze az űrlap adatait,
   * és tegyük bele egy objektumba 
   * és fűzzük, hozzá a listánkhoz
    */

  //megfogom a beviteli mezőt
  const NevInputElem = document.querySelector("#knev") 
  //beleteszem a már fentebb lértehozott listába a beírt adatokat
  kutya.nev=NevInputElem.value;

  const KorInputElem = document.querySelector("#kkor") 
  kutya.kor=KorInputElem.value;

  const FajtaInputElem = document.querySelector("#kfajta") 
  kutya.fajta=FajtaInputElem.value;

  const NemInputElem = document.querySelector("#szuka");
  if (NemInputElem.checked) {
    kutya.nem = "szuka";
  } else {
    kutya.nem = "kan";
  }


    KUTYALISTA.push(kutya);
    let tablazat = document.querySelector("article section");
    console.log(tablazat)
    tablazat.innerHTML = osszeallit2(KUTYALISTA);
    torlesGomb();
}



