window.onload = () => {
  const saoPaulo = {
    lat: -23.533773,
    lng: -46.625290
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: saoPaulo
  });

  let center = {
    lat: undefined,
    lng: undefined
  };

  function placePlaces(places) {
    places.data.forEach(function(place) {
      console.log(place.latitude);
      console.log(place.longitude);
      const center = {
        lat: place.latitude,
        lng: place.longitude
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name
      });
      markers.push(pin);
    });
  }

  function getPlaces() {
    axios
      .get("/places/api")
      .then(response => {
        console.log(response);
        placePlaces(response);
      })
      .catch(error => (console.log(error)));
  }

  getPlaces();
};
