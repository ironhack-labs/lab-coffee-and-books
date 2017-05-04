
var map;
var infowindow;
var type = ['restaurants'];

function startMap() {
  var ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916
    };

   map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackBCN
    });

    infowindow = new google.maps.InfoWindow();
       var service = new google.maps.places.PlacesService(map);
       service.nearbySearch({
         location: ironhackBCN,
         radius: 500,
         type: type,
       }, callback);


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


   function callback(results, status) {
       if (status === google.maps.places.PlacesServiceStatus.OK) {
         for (var i = 0; i < results.length; i++) {
           createMarker(results[i]);
         }
       }
     }

   function createMarker(place) {
       var placeLoc = place.geometry.location;
       var marker = new google.maps.Marker({
         map: map,
         position: place.geometry.location
       });

       google.maps.event.addListener(marker, 'click', function() {
         infowindow.setContent(place.name, place.photos, place.icon);
         infowindow.open(map, this);
         console.log(place);
       });
     }





$(document).ready(function(){
console.log(locations);
  startMap();
});
