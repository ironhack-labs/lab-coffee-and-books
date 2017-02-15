$(document).ready(function(){
   const amsterdam = {
     lat: 52.37020380000001,
     lng: 4.89532650000001
   };

 const map = new google.maps.Map(document.getElementById('map'), {
     zoom: 15,
     center: amsterdam
   });

   // Add restaurant markers to map
   let markers = [];

   myPlaces.forEach(function(place){
     let title = place.name;
     let position = {
       lat: place.location.coordinates[1],
       lng: place.location.coordinates[0]
     };

     var pin = new google.maps.Marker({ position, map, title  });
     if(place.name === "Coffee") {pin.setIcon('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png')}
     else if (place.name === "books") {markers.push(pin)}
   });

 });
