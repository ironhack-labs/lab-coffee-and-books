function startMap() {

  // Creo un mapa, lo centro en BCN y coloco un marcador en BCN
  const ironhackMAD = {
      lat: 40.3923463,
      lng: -3.6984743999999994
  };
  const map = new google.maps.Map(
      document.getElementById('map'),
      {
          zoom: 15,
          center: ironhackMAD
      }
  );
  const bounds = new google.maps.LatLngBounds();

  place.forEach( p => {
      console.log("entramos en el for de map");
      console.log(p);
      bounds.extend(p.location);
      createWindow(map, p.location, `<h2>${p.name}</h2>`);
  });
  map.fitBounds(bounds);

  // Geolocaliza al usuario y luego llama a success_fn con la posicion que has obtenido
  /*getPosition().then((loc) => {
      console.log(loc)
      // Esta funcion centra el mapa el lat y lng dependiendo de lo que valga loc
      // y pone un marcador en esa posicion
      // Center map with user location
      // map.setCenter(loc);
      // Add a marker for your user location
      createWindow(map, loc, `<h2>ESTOY AQUI</h2>`);
  });*/
}


function createWindow(map, pos, content) {

  var infowindow = new google.maps.InfoWindow({
      content: content
  });
  var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'Place'
  });
  marker.addListener('click', function () {
      infowindow.open(map, marker);
  });
}

/*

function getPosition() {
  return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
          const fail_fn = function () {
              console.log('Error in the geolocation service.');
          }
          console.log("Geolocalizing.....")
          navigator.geolocation.getCurrentPosition(position => {
              const user_location = {
                  //lat: position.coords.latitude,
                  //lng: position.coords.longitude,
                  lat: position.lat,
                  lng: position.lng
              };
              resolve(user_location)
          }, reject);
      } else {
          console.log('Browser does not support geolocation.');
          reject();
      }
  });

  */