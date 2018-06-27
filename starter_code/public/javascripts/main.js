window.onload = () => {
  const ironhackMIAMI = {
    lat: 25.766033, 
    lng: -80.196191
  };
  
  let markers = [];
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackMIAMI
  });

  let center = {
    lat: undefined,
    lng: undefined
  };  
  
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      center = { lat: position.coords.latitude, lng: position.coords.longitude };
      map.setCenter(center);
      getPlace();
    }, () => {
      getPlace();
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  function deleteMarkers() {
    markers.forEach(function(marker) {
      marker.setMap(null);
      marker = null;
    });
    markers = [];
  }

  function getPlace() {
    axios.get("http://localhost:3000/api")
    .then( response => {
      placePlaces(response.data.places);
    })
    .catch(error => {
      next(error);
    });
  }

  function placePlaces(places){
    places.forEach(function(place){
      const center = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name
      });
      markers.push(pin);
    });
  }

};