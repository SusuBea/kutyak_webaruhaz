import { adatBeolvas } from "./aszinkron.js";
import  { osszeallit } from "./adatkezeles.js";
import  { kosar_osszeallit } from "./adatkezeles.js";



let KUTYALISTA = []
let ARTICLE;
let kartyak;
let kosar;

$(function (){

  let vegpont = "adatok.json"
  adatBeolvas(vegpont, init)
})

function init(LISTA) {
  KUTYALISTA = LISTA
  ARTICLE = document.querySelector("article");
  let kartyak = document.querySelector("section.kartyak");
  kartyak.innerHTML = osszeallit(KUTYALISTA)
  let kosar = document.querySelector(".kosar_gomb")
  console.log(kosar)
  kosar.addEventListener("click", kosar_mutat)
  kosar_bezar();  
}

function kosar_mutat(){
  $(".kosar").on("click", $(".cart_parent").html(kosar_osszeallit()))
    kosar_bezar();
}


function kosar_bezar(){
  const x = document.querySelector("#x")
  console.log(x)
  x.addEventListener("click", torles)
}

function torles(event){
  const DIV = event.target.parentNode;
  console.log(DIV)
  DIV.remove();
}