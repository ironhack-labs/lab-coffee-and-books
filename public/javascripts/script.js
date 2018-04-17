document.addEventListener('DOMContentLoaded', () => {

// map
function startMap() {
const ironhackMAD = {
  lat: 40.3927609,
  lng: -3.6995114
};
const map = new google.maps.Map(
  document.getElementById('map'),
  {
    zoom: 15,
    center: ironhackMAD
  }
);
const myMarker = new google.maps.Marker({
  position: {
  	lat: ironhackMAD.lat,
  	lng: ironhackMAD.lng
  },
  map: map,
  title: "Poing!"
});
}

startMap();

}, false);