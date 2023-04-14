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
   txt += '<div class="card-body kartya card w-40 Cart-Container" id="cart"><button id="x" class="btn btn-primary btn-sm" type="button">&#x2613;</button><h3 class=”Heading” id="h3">Tartalom:</h3><h6 id="h6">Jelenleg üres a kosár.</h6><br></div>'
  return txt
}


