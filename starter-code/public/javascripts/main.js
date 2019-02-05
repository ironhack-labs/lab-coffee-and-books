window.onload = () => {
  const ironhackBCN = {
    lat: 41.38623,
    lng: 2.17498
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: ironhackBCN
  });

  function getPlaces() {
    axios.get("/api")
      .then(response => {
          console.log(response.data.places)
        printPlaces(response.data.places);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function printPlaces(places) {
    places.forEach(place => {
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

  getPlaces()
};
