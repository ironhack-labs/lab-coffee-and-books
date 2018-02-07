'use strict';

function main () {
  function startMap () {
    const ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );
    var myMarker = new google.maps.Marker({
      position: {
        lat: 41.3977381,
        lng: 2.190471916
      },
      map: map,
      title: "I'm here"
    });
    axios.get('/places')
      .then(function (response) {
        console.log(response);
        response.data.forEach((place) => {
          const marker = new google.maps.Marker({
            position: {
              lat: place.location.coordinates[0],
              lng: place.location.coordinates[1]
            },
            map: map,
            title: place.name
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  startMap();
}

window.onload = main;
