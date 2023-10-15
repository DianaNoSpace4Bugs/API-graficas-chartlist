
//EJERCICIO 1

// fetch('https://swapi.dev/api/films/')
//     .then(res => res.json())
//     .then(array=> array.results)
//     .then(listaPelis => {
//         let fechasPeli = [];
//         let nombresPeli = [];
//         for (let i = 0; i < listaPelis.length; i++) {
//             const peli = listaPelis[i];
//             fechasPeli.push(peli.release_date);
//             nombresPeli.push(peli.title);
//         }
//         fechasPeli = anioDeFechasANumero(fechasPeli);
//         const data = {
//             labels: nombresPeli,
//             series: [fechasPeli],
//         };
//         const options = {
//             high: Math.max(...fechasPeli),
//             low: Math.min(...fechasPeli),
//             axisY: {
//                 onlyInteger: true,
//             }
//         };
//         new Chartist.Line('#chart1', data, options);
                
// })

function anioDeFechasANumero(fechas) {
    let anios = [];
    for (let posicion = 0; posicion < fechas.length; posicion++){
        let fecha = fechas[posicion];
        let fechaAnio = fecha.slice(0,4);
        let anioComoNumero = Number(fechaAnio);
        anios.push(anioComoNumero);
    }
    return anios;
}


//EJERCICIO 2
fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(array=> array.results)
    .then(listaPersonajes=> {
        let nombresPersonajes = [];
        let numeroPelisPersonaje = [];
        for (let i = 0; i < listaPersonajes.length; i++) {
            const personaje = listaPersonajes[i];
            nombresPersonajes.push(personaje.name);
            numeroPelisPersonaje.push(personaje.films.length);
        }
        const data = {
            labels: nombresPersonajes,
            series: [numeroPelisPersonaje],
        };
        const options = {
            high: Math.max(...numeroPelisPersonaje)+1,
            low: 0,
            axisY: {
                onlyInteger: true,
            }
        };
        new Chartist.Line('#chart1', data, options);

})
