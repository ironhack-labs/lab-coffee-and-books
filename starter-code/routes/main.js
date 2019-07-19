window.onload = () => {
  console.log('entreeiii');

  const ironhackSPStart = {
    lat: -23.5617375,
    lng: -46.6601331,
  };

  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackSPStart,
    },
  );

  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980,
  };

  const markers = [];

  // const map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 13,
  //   center: ironhackBCN
  // });

  const center = {
    lat: undefined,
    lng: undefined,
  };

  function placePlaces(places) {
    places.forEach((place) => {
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
  }
  function getPlaces() {
    axios.get('/api')
      .then((response) => {
        placePlaces(response.data.places);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getPlaces();
};
