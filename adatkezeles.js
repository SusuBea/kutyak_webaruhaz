export function osszeallit(lista) {
    let txt = "";


    for (let index = 0; index < lista.length; index++) {
      txt += `<div class= "kartya card w-40">`
      txt += `<div class="card-body">`
      txt += `<h5 class="card-title">${lista[index].nev}</h5>`
      for (const kulcs in lista[index]) {
        txt += `<p class="card-text">${kulcs}: ${lista[index][kulcs]}</p>`;

      }
      txt += `<a href="#" class="btn btn-primary">Mutat</a>`
      txt += `</div>`;
      txt += `</div>`;
    }
   return txt;
  }

  export function tablazat_osszeallit(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt += `<tr><th scope="row" data-th->${[index+1]}</th>`;
        for (const kulcs in lista[index]) {
            txt += `<td>${lista[index][kulcs]}</td>`;
        }
        txt += '</tr>';
    }

     return txt

  }

export function kosar_osszeallit(){
  let txt ="" 
   txt += '<div class=”Cart-Container”><aside id="cart" class="kartya card w-40""><div class="card-body"><div class=”Header”><h3 class=”Heading”>Tartalom:</h3><h6>Jelenleg üres a kossara.</h6><br></div></aside></div>'
  return txt
}


