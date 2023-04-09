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
  
  export function osszeallit2(lista) {
    let txt = '<div class="table-responsive"><table class="table table-hover "><thead class= "thead-dark"><tr><th scope="col">#</th><th scope="col">Név</th><th scope="col">Kor</th><th scope="col">Fajta</th><th scope="col">Nem</th><th scope="col">Szerkeszt</th></tr></thead>';
    for (let index = 0; index < lista.length; index++) {
        txt += `<tbody><tr><th scope="row">${[index+1]}</th>`;
        for (const kulcs in lista[index]) {
            txt += `<td>${lista[index][kulcs]}</td>`;
        }
        txt += '</tr>';
    }

        txt += '</tbody>';
        txt += '</table>';
        txt += '</div>';
      return txt
   
  }

  
  