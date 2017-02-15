$.ajax({
  url:     'http://localhost:3000/api/places',
 type:    'GET',
 success: function (response) {
   var myPlaces = response;
   // Create and Initialize Map
   const map = new google.maps.Map(document.getElementById('map'), {
     zoom: 15,
     center: {lat: 40.417080, lng: -3.703612}
   });

   // Add restaurant markers to map
   let markers = [];
    myPlaces.forEach(function(place){
     let title = place.name
     let position = {
       lat: place.location.coordinates[1],
       lng: place.location.coordinates[0]
     };
     var pin = new google.maps.Marker({ position, map, title  });
     console.log(pin);
     markers.push(pin)
   });
 },
 error: function (err) {console.log(err);}
});
