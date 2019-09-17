// document.addEventListener(
//   "DOMContentLoaded",
//   () => {
//     console.log("IronGenerator JS imported successfully!");
//   },
//   false
// );

window.onload = () => {

  const ironhackMAD = {
    lat: 40.392449,
    lng: -3.697465
  };

  const markers = [];
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: ironhackMAD
  });

  let center = {
    lat: undefined,
    lng: undefined
  };


  axios.get('/places')
  .then(({ data }) => {
    data.forEach((place) => {
      new google.maps.Marker({
        position: {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0],
        },
        title: place.name,
        map,
      });
    });
  });





};


