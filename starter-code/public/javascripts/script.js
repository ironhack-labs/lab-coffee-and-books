document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);
let theMap;

function startMap(){
  theMap = new google.maps.Map(document.getElementById("map"),{
    zoom: 10,
    center: {lat: 40.24594, lng: -3.42922}
  })
}


let marker = new google.maps.Marker({
  position: {
    lat: 41.3977381,
    lng: 2.190471916
  },
  map: theMap,
  title: "Marker with events"
});


marker.addListener("click", showBootcampData);


let lat = place.lat
let lon = place.lon

function displayMarkersRow(theMap) {
  //creamos un array?
  .forEach((_, idx) => {
    new google.maps.Marker({
      position: {
        lat: {lat},
        lng: {lon}
      },
      map: theMap,
      title: "Testing a line of markers, marker #" + idx,
      draggable: true
    });
  });
}

startMap();