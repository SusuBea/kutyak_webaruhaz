import { KUTYALISTA} from "./adat.js";
import  { osszeallit } from "./adatkezeles.js";
import  { kosar_osszeallit } from "./adatkezeles.js";
window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let kosar;

function init() {
  ARTICLE = document.querySelector("article");
  let kartyak = document.querySelector("section.kartyak");
  kartyak.innerHTML = osszeallit(KUTYALISTA)
  let kosar = document.querySelector(".kosar_gomb")
  console.log(kosar)
  kosar.addEventListener("click", kosar_mutat)
}

function kosar_mutat(){
  let kosar = document.querySelector("#cart_parent")
  console.log(kosar)
  kosar.innerHTML += kosar_osszeallit();

}

