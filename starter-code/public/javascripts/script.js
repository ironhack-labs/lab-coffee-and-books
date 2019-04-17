// let places = [];
document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
    // places.push("hola")
  },
  false
);

function startMap() {
  const Madrid = {
    lat: 40.4577381,
    lng: -3.689471916
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: Madrid
  });

  axios.get("http://localhost:3000/movies/json").then(responses => {
    console.log(responses.data.pan[0]);
    let jam = responses.data.pan;
    let places = [];
    jam
      .forEach(pig => places.push(pig))

    places
      .forEach(airportData => {
        new google.maps.Marker({
          position: {
            lat: airportData.genre,
            lng: airportData.plot
          },
          map: map,
          title: airportData.tittle
        });

        console.log(airportData);
      });

    console.log(places);
  });
}

startMap();
