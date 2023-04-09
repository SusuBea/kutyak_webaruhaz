import { KUTYALISTA} from "./adat.js";
import  { osszeallit } from "./adatkezeles.js";
// import  { rendezesBarmiSzerint} from "./rendezesSzures.js";
window.addEventListener("load", init);

let ARTICLE;
let kartyak;

function init() {
  // rendezesBarmiSzerint(KUTYALISTA, "kor", -1)
  //   console.log()
  
  ARTICLE = document.querySelector("article");
  let kartyak = document.querySelector("section.kartyak");
  kartyak.innerHTML = osszeallit(KUTYALISTA)
}



// function torlesGomb() {
//   const TR = document.querySelectorAll("tr");

//   for (let index = 0; index < KUTYALISTA.length; index++) {
//     const TD = document.createElement("td");
//     const TORLES = document.createElement("button");
//     TORLES.innerText = "Törlés";
//     TR[index].appendChild(TD);
//     TD.appendChild(TORLES);
//     TORLES.addEventListener("click", function () {
//       torlesFunkcio(index);
//     });
//   }
// }


// function torlesFunkcio(index) {
//   KUTYALISTA.splice(index, 1);
//   kartyak.innerHTML = osszeallit(KUTYALISTA)
  

//   torlesGomb();
// }



// function ujKutya() {
//   //itt hozom létre  a listát amibe belepakolok majd mindent - NevInputElem...stb.
//   const kutya= {};


 
//   /**szedjük össze az űrlap adatait,
//    * és tegyük bele egy objektumba 
//    * és fűzzük, hozzá a listánkhoz
//     */

//   //megfogom a beviteli mezőt
//   const NevInputElem = document.querySelector("#knev") 
//   //beleteszem a már fentebb lértehozott listába a beírt adatokat
//   kutya.nev=NevInputElem.value;

//   const KorInputElem = document.querySelector("#kkor") 
//   kutya.kor=KorInputElem.value;

//   const FajtaInputElem = document.querySelector("#kfajta") 
//   kutya.fajta=FajtaInputElem.value;

//   const NemInputElem = document.querySelector("#szuka");
//   if (NemInputElem.checked) {
//     kutya.nem = "szuka";
//   } else {
//     kutya.nem = "kan";
//   }

//   console.log(kutya)

//   KUTYALISTA.push(kutya);
//     console.log(KUTYALISTA);
//     torlesGomb();
// }