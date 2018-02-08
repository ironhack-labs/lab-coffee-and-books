var map;

      function initMap() {
        position = {lat:40.407304, lng:-3.694664};
        map = new google.maps.Map(document.getElementById('map'), {
          center: position,
          zoom: 15
        });
          sitios.forEach(p =>{
            createWindow(p.lat,p.lng,p.name);
          });
      }

      function createWindow(lat,lng,name){
        var infowindow = new google.maps.InfoWindow({
            content: name
        });
        console.log(position)
        var marker= new google.maps.Marker({
            position: {lat,lng},
            map: map,
            title: name
        });
          marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
      }


    //   // Geolocaliza al usuario y luego llama a success_fn con la posicion que has obtenido
    // getPosition().then((loc) => {
    //     console.log(loc)
    //     // Esta funcion centra el mapa el lat y lng dependiendo de lo que valga loc
    //     // y pone un marcador en esa posicion
    //     // Center map with user location
    //     // map.setCenter(loc);
    //     // Add a marker for your user location
    //     createWindow(lat,lng,name);
    // });



// function getPosition() {
//     return new Promise((resolve, reject) => {
//         if (navigator.geolocation) {
//             const fail_fn = function () {
//                 console.log('Error in the geolocation service.');
//             }
//             console.log("Geolocalizing.....")
//             navigator.geolocation.getCurrentPosition(position => {
//                 const user_location = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude,
//                 };
//                 resolve(user_location)
//             }, reject);
//         } else {
//             console.log('Browser does not support geolocation.');
//             reject();
//         }
//     });
// }