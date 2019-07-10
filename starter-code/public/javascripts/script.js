window.onload = () => {
  const mapCenter = {
    lat: -23.5660039,
    lng: -46.6514117,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: mapCenter,
  });

  function placePlaces(places) {
    if (places.length > 0) {
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
    } else {
      const center = {
        lat: places.location.coordinates[1],
        lng: places.location.coordinates[0],
      };
      const pin = new google.maps.Marker({
        position: center,
        map,
        title: places.name,
      });
      markers.push(pin);
    }
  }

  function getPlaces() {
    if (document.URL.indexOf('edit') === -1) {
      axios.get('/places/api')
        .then((response) => {
          placePlaces(response.data.places);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios.get(`/places/api/${document.URL.slice(document.URL.indexOf('edit/') + 'edit/'.length)}`)
        .then((response) => {
          placePlaces(response.data.places);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  getPlaces();
};