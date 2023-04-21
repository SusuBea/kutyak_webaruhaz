import { adatBeolvas } from "./aszinkron.js";
import { tablazat_osszeallit } from "./adatkezeles.js";
import  { kosar_osszeallit } from "./adatkezeles.js";
import { rendezBarmiSzerint } from "./rendezesSzures.js";


let article;
let KUTYALISTA = []
let rendezMezo = "";
let rendezIrany = 1;
let kosar;

$(function (){
  let vegpont = "adatok.json"
  adatBeolvas(vegpont, init)
})


function init(LISTA) {
  KUTYALISTA = LISTA

  $("article section table tbody").html(tablazat_osszeallit(KUTYALISTA))
  torlesGomb();
  $("#rogzites").on("click", UjKutya);

  rendezBarmiSzerint(KUTYALISTA, "kor", -1)
  $("#kkor").on("click", rendezBarmiSzerint)


  let thElemek = document.querySelectorAll("th[data-sort-field]");
  for (const th of thElemek) {
    th.addEventListener("click", thClick);
  }

  $(".kosar_gomb").on("click", kosar_mutat)
  kosar_bezar();

}

function thClick(event) {
  let ujRendezMezo = event.target.dataset.sortField;
  console.log("thClick *", ujRendezMezo);
  if (ujRendezMezo !== undefined) {
    if (rendezMezo == ujRendezMezo) {
      rendezIrany *= -1;
      console.log("thClick c1");
    } else {
      rendezMezo = ujRendezMezo;
      rendezIrany = 1;
      console.log("thClick c2");
    }
    console.log("thClick", rendezMezo, rendezIrany);
    rendezBarmiSzerint(KUTYALISTA, rendezMezo, rendezIrany);

    let tablazat = document.querySelector("article section table tbody");
    tablazat.innerHTML = tablazat_osszeallit(KUTYALISTA)
  }
  torlesGomb();
}

function torlesGomb() {
  let tr = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let torles = document.createElement("button");
    let szerkeszt = document.createElement("button")
    torles.innerText = "Törlés";
    szerkeszt.innerText = "Szerkeszt";
    tr[index + 1].appendChild(td);
    tr[index + 1].appendChild(td2);
    td.appendChild(torles);
    td2.appendChild(szerkeszt);

    torles.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  let tbody = document.querySelector("article section table tbody");
  tbody.innerHTML = tablazat_osszeallit(KUTYALISTA)
  console.log("test")
  torlesGomb();
}

function UjKutya() {
  const kutya = {};

  const NevInputElem = document.querySelector("#knev")
 
  kutya.nev = NevInputElem.value;

  const KorInputElem = document.querySelector("#kkor")
  kutya.kor = KorInputElem.value;

  const FajtaInputElem = document.querySelector("#kfajta")
  kutya.fajta = FajtaInputElem.value;

  const NemInputElem = document.querySelector("#szuka");
  if (NemInputElem.checked) {
    kutya.nem = "szuka";
  } else {
    kutya.nem = "kan";
  }

  KUTYALISTA.push(kutya);
  let tablazat = document.querySelector("article section table tbody");
  console.log(tablazat)
  tablazat.innerHTML = tablazat_osszeallit(KUTYALISTA);
  torlesGomb();
}



function kosar_mutat(){
  $(".kosar").on("click", $(".cart_parent").html(kosar_osszeallit()))
    kosar_bezar();
}


function kosar_bezar(){
  $("#x").on("click", torles)
}



function torles(event){
  const DIV = event.target.parentNode;
  console.log(DIV)
  DIV.remove();
}