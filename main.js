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


