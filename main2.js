let lista = []

export function betolt (){
    let vegpont = "adatok.json"
    adatBeolvas(vegpont, megejelenit)

    console.log(lista)


}

function megejelenit(data){
    lista = data
    console.log(lista)
}

function adatBeolvas(vegpont, callbackFv){
    fetch(vegpont, {
        method: "GET"

    })

    .then((response) => response.json())
    .then((data) => {
        callbackFv(data.adatLista)
    })
    .catch((err) => console.log(err));




}