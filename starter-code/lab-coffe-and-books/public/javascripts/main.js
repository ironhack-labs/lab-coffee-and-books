
window.onload = function(){
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

  let markers = [];
  myRestaurants.forEach(function(restaurant){
    console.log(restaurant);
    let title = restaurant.name;
    let position = {
      lat: restaurant.location.coordinates[0],
      lng: restaurant.location.coordinates[1]
    };
    var pin = new google.maps.Marker({ position, map, title  });
    markers.push(pin);
  });
};
