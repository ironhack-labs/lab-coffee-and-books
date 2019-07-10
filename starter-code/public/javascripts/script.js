const ironhackSP = {
  lat: -23.561782,
  lng: -46.660079,
};


const markers = [];

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: ironhackSP,
});

const center = {
  lat: -23.561782,
  lng: -46.660079,
};

const getPlaces = () => {
  axios.get('/api')
    .then((response) => {
      markPlaces(response.data.places);
    })
    .catch((error) => {
      console.log(error);
    });
};

const markPlaces = (places) => {
  places.forEach((place) => {
    console.log(place.location);
    const center = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0],
    };
    const pin = new google.maps.Marker({
      position: center,
      map,
      title: place.name,
    });

    markers.push(pin);
  });
};


getPlaces();
