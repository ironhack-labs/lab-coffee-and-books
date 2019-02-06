document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

const markers = [];

function startMap() {
  const madrid = {
    lat: 40.416775,
    lng: -3.70379
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: madrid
  });
  axios
    .get("/places/api")
    .then(res => {
      res.data.forEach(place => {
        console.log(parseFloat(place.location.coordinates[1]));
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
    })
    .catch(error => console.log(error));
}

startMap();
