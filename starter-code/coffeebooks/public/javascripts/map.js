
function startMap() {
  var ironhackBCN = {
  	lat: 41.3977381,
  	lng: 2.190471916};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 12,
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
}

// function updateMap(markers) {
//   console.log(placesArray);
//   placesArray.forEach(function(place) {
//     let position = {
//       lat: place.location.coordinates[0],
//       lng: place.location.coordinates[1]
//     };
//     console.log(position);
//     var pin = new google.maps.Marker({
//       position: position,
//       setMap: map,
//       title: place.name
//     });
//     console.log(pin.position);
//     markers.push(pin);
//     console.log(markers);
//   });
// }
//

let markers = [];
function updateMap(){
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 12,
      center: {
      	lat: 41.3977381,
      	lng: 2.190471916}
    });
placesArray.forEach(function(place){
  var icon;
  if (place.type === "Coffee Shop") {
    icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
  } else {
    icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  }
  let title =place.name;
  let position = {
    lat: place.location.coordinates[0],
    lng: place.location.coordinates[1]
  };
  console.log(position.lat , position.lng);
  var pin = new google.maps.Marker ({position, map, title, icon });
  markers.push(pin);
});
}
  $(document).ready(function(){
    var markers = [];
    startMap();
    updateMap();
  });
