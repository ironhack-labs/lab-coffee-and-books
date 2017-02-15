$(document).ready(function(){
 const firstPin = {
   lat: myPlaces[0].location.coordinates[1],
   lng: myPlaces[0].location.coordinates[0]
 };

 drawMap();

 function drawMap (kindField = 'all') {
  //  var bounds  = new google.maps.LatLngBounds();
   // Create and Initialize Map
   const map = new google.maps.Map(document.getElementById('map'), {
     zoom: 7,
     center: firstPin,
   });

   // Add restaurant markers to map
   const filteredPlaces = myPlaces.filter(function(elem){return kindField==='all' || kindField === elem.kind});
   let markers = [];
   filteredPlaces.forEach(function(place){
     let title = place.name
     let position = {
       lat: place.location.coordinates[1],
       lng: place.location.coordinates[0]
     };
     var pin = new google.maps.Marker({ position, map, title  });
     markers.push(pin)
    //  var loc = new google.maps.LatLng(place.position.lat(), place.position.lng());
    //  bounds.extend(loc);
   });
  //  map.fitBounds(bounds);
  //  map.panToBounds(bounds);
 }


 $('#id-changer').on('change', (event) => {
   // event.preventDefault();
   var kindField = document.getElementById('kind').value;
   drawMap(kindField);
 });
});
