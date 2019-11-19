let theMap;
let currentPlace = document.getElementById("name").innerText;


axios.get("http://localhost:3000/placesData").then(payload => {
  startMap(payload.data.filter(place => place.name === currentPlace)[0])
})

function startMap(place) {

  let coords = { lat: place.location.coordinates[1], lng: place.location.coordinates[0] };
  theMap = new google.maps.Map(document.getElementById("map"), {zoom: 18,center: coords });
  new google.maps.Marker({
    position: coords,
    map: theMap,
    title: place.name,
    animation: google.maps.Animation.DROP,
    draggable: false
  });
}
