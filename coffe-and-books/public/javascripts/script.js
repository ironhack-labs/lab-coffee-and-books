window.onload = () => {
  const ironhackMEX = { lat: 19.3977864, lng: -99.1714789 };
  // Map initialization
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ironhackMEX
  });

  const myPlaces = window.places;
  console.log(myPlaces);

  // Add restaurant markers to map
  let markers = [];
  myPlaces.forEach(function(place) {
    let title = place.name;
    let position = {
      lat: place.location.coordinates[0],
      lng: place.location.coordinates[1]
    };
    var pin = new google.maps.Marker({
      position: position,
      map: map,
      title: title
    });
    markers.push(pin);
  });
};