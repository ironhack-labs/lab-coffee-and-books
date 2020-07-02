function startMap() {
    const ironhackBCN = {
        lat: 41.3977381,
        lng: 2.190471916
    };
    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 5,
            center: ironhackBCN
        }
    );
}

startMap();







// initMap = () => {

//     let mapOptions = {
//         center: directions.ironhackBCN.coords,
//         zoom: 15,
//         styles: mapStyles.aubergine
//     }

//     const myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions)


//     let markerOptions = {
//         position: directions.ironhackBCN.coords,
//         map: myMap,
//         title: directions.ironhackBCN.title
//     }

//     new google.maps.Marker(markerOptions)
}