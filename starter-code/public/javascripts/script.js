window.onload = () => {
  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980
  };


  const markers = []

  console.log(markers)

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: ironhackBCN
  });


  let center = {
    lat: undefined,
    lng: undefined
  };

  function getPlaces() {
    axios.get("http://localhost:3000/places-data")
      .then(response => {
        // console.log(response.data)
        placePlaces(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function placePlaces(places) {
    places.forEach((place) => {

      const center = {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
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



