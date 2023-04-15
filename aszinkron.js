

export function adatBeolvas(vegpont, callbackFv){
    fetch(vegpont, {
        method: "GET"

    })

    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        callbackFv(data.KUTYALISTA)
    })
    .catch((err) => console.log(err));




}