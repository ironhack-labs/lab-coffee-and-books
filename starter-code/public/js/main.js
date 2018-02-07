$(document).ready(function(){
  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {
      lat:40.396269, 
      lng:-3.694509
    }
  });

  let markers = [];
  myPlaces.forEach(function(place){


    let name = place.name
    let position = {
      lat: place.location.lat,
      lng: place.location.lng
    };
    let icon;
    if(place.type == "Coffee"){ 
      icon = "/images/coffee.png";
    } else{
      icon = "/images/book.png";
    }

    var pin = new google.maps.Marker({ position, map, name, icon });
    markers.push(pin)
  });
});
