

const Madrid = { lat: 40.4183083, lng: -3.70275 };
const markers = []
let map;

function startMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: Madrid
  });

  showMarkers(map)

}

startMap();



function showMarkers(map) {
  axios.get("http://localhost:3000/places-data").then(allPlaces => {
    allPlaces.data.forEach(places => {
      let marker = new google.maps.Marker({
        position: {
          lat: places.location.coordinates[0],
          lng: places.location.coordinates[1]
        },
        map: map,
        title: places.name,
        draggable : true
      });

      var infowindow = new google.maps.InfoWindow({
        content: `${places.name} - ${places.type} <br>At ${marker.position}` 
      });

      marker.addListener("click", function() {
        infowindow.open(map, marker);
      });

    });

  });
}

  