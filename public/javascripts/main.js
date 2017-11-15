const sol = {
    lat: 40.417080,
    lng: -3.703612
  };



const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: sol
});

myRestaurants.forEach( e => {
  let postion =
  {
    lat: e.location.coordinates[0],
    lng: e.location.coordinates[1]
  }
  new google.maps.Marker( { position: postion, map, title:e.name } );
});
