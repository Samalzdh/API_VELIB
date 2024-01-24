function showVelibStation(element, station) {
    const div = document.createElement('div');
    div.className = 'station';
    div.innerHTML = `
        <h2>Station : ${station.name}</h2>
        <p>${station.mechanical} Velibs vert </p>
        <p>${station.ebike}  Velibs bleu </p>
        <p>Velibs dispo: ${station.numbikesavailable}</p>
        <p>Docks dispo : ${station.numdocksavailable}</p>
    `;
    element.appendChild(div);
}

const url = 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=20'


// async function fetchVelibData() {
//    const r = await fetch(url)
//     console.log(url)
//     if (r.ok === true) {
//     .then(response => response.json() ,console.log(response.json()))
//     .then (data => {
        
//     })
//     throw new Error("dsl ca marche pas")


function fetchVelibData() {
    //on recupere la promesse en json
    fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Probleme de co');
            }
            return response.json();
        })
        //on met le json dans la boucle et on affiche les infos
        .then(data => {
            const stationsContainer = document.getElementById('velib-stations');
            stationsContainer.innerHTML = ''; // Nettoyage de la div
            data.results.forEach(station => {
                showVelibStation(stationsContainer, station);
            });
        })
        .catch(error => {
            console.error('Failed to fetch Velib data:', error);
        });
}

// function fetchVelibData() {
//     fetch(url) 
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Problème de connexion');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const stationsContainer = document.getElementById('velib-stations');
//             stationsContainer.innerHTML = ''; // Nettoyage de la div
//             data.results.forEach(station => {
//                 showVelibStation(stationsContainer, station);
//             });
//         })
//         .catch(error => {
//             console.error('Failed to fetch Velib data:', error);
//         });
// }

fetchVelibData();
setInterval(fetchVelibData, 60000);
