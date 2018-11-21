function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startMap() {
  const ironhackMAD = {
    lat: 40.392578,
    lng: -3.698246,
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 5,
      center: ironhackMAD,
    },
  );
  const myMarker = new google.maps.Marker({
    position: ironhackMAD,
    map,
  });
}
startMap();
