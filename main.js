import { KUTYALISTA} from "./adat.js";
import  { osszeallit } from "./adatkezeles.js";
window.addEventListener("load", init);

let ARTICLE;
let kartyak;

function init() {
  ARTICLE = document.querySelector("article");
  let kartyak = document.querySelector("section.kartyak");
  kartyak.innerHTML = osszeallit(KUTYALISTA)
}


