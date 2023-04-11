export function rendezBarmiSzerint(lista, kulcs, irany = 1) {
    console.log(lista)
    lista.sort(function (a, b) {
        let ertek = 1;
        if (a[kulcs] < b[kulcs]) {
            ertek = -1;
        }
        ertek *= irany;
        return ertek;
    });
}