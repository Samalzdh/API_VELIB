function showVelibStation(element, station) {
    const div = document.createElement('div');
    div.className = 'station';
    div.innerHTML = `
        <h2>Station : ${station.name}</h2>
        <p>${station.capacity} classical Velibs</p>
        <p>${station.fields.ebike} electric Velibs</p>
        <P>${station.numbikesavailable}</P>
        <P>${station.numdocksavailable}</P>
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
    console.log(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Probleme de co');
            }
            return response.json();
            console.log(response.json());
        })

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

fetchVelibData();
setInterval(fetchVelibData, 60000);