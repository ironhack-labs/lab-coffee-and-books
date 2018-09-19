window.onload = () => {
  function startMap() {
    const ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 5,
        center: ironhackBCN
      }
    );
  }
  
  const myMarker = new google.maps.Marker({
    position: {
      lat: 41.3977381,
      lng: 2.190471916
    },
    map: map,
    title: "I'm here"
  });
  startMap();

  /* const ironhackBCN = {
    lat: 41.386230, 
    lng: 2.174980
  };
  
  const markers = []
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN
  });

  let center = {
    lat: undefined,
    lng: undefined
  };  
  
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      center = { lat: position.coords.latitude, lng: position.coords.longitude };
      map.setCenter(center);
      getRestaurants();
    }, () => {
      getRestaurants();
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  function deleteMarkers() {
    markers.forEach(function(marker) {
      marker.setMap(null);
      marker = null;
    })
    markers = [];
  }

  function getRestaurants() {
    axios.get("/api")
    .then( response => {
      placeRestaurants(response.data.restaurants)
    })
    .catch(error => {
      next(error)
    })
  }

  function placeRestaurants(restaurants){
    restaurants.forEach(function(restaurant){
      const center = {
        lat: restaurant.location.coordinates[1],
        lng: restaurant.location.coordinates[0]
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: restaurant.name
      });
      markers.push(pin)
    });
  } */

};