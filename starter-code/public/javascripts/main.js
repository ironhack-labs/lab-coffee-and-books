let map;

window.onload = () => {
  const micasa = {
    lat: 40.4110018,
    lng: -3.7070343
  };

  const markers = [];

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: micasa
  });

  let center = {
    lat: undefined,
    lng: undefined
  };

  axios.get("/placesForAxios").then(places => {
    places.data.forEach(place => {
      console.log(place);
      new google.maps.Marker({
        position: new google.maps.LatLng(
          +place.positionlat,
          +place.positionlng
        ),
        map: map,
        title: place.name
      });
    });
  });
};
