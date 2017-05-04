
function startMap() {
  var ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916};
  var map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackBCN
    });

    let markers = [];
    locations.forEach(function(places){
      let title = places.name;
      let position = {
        lat: places.coordinates[1],
        lng: places.coordinates[0]
      };
      var icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';

      if(places.description === "coffeeshop"){
        icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
      }
      var pin = new google.maps.Marker({position, map, title, icon});
      markers.push(pin);
    }); // var map
} // startMap

$(document).ready(function(){
console.log(locations);
  startMap();
});
