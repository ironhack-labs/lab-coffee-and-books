window.onload = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: {
      lat: 40.4845867,
      lng: -3.3620984000000362
    }
  });

  

  getPlaces(map);
};


function getPlaces(map) {
  axios
    .get("/place/api")
    .then(response => placePlaces(response.data.place, map))
    .catch(error => console.log(error));
}

const placePlaces = (places, myMap) => {
  places.forEach(place => {
    console.log("place es",place)
    const location = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };

    new google.maps.Marker({
      position: location,
      map: myMap,
      title: place.name
    });
  });
};