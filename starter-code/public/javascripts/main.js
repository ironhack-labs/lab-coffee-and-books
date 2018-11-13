window.onload = () => {
  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN,
  });

  function placePlaces(places) {
    places.forEach((places) => {
      const center = {
        lat: places.location.coordinates[0],
        lng: places.location.coordinates[1],
      };
      const pin = new google.maps.Marker({
        position: center,
        map,
        title: places.name,
      });
      markers.push(pin);
    });
  }

  function getPlaces() {
    axios.get('/places/api')
      .then((response) => {
        placePlaces(response.data.places);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getPlaces();
};
