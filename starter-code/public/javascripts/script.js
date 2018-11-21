

function startMap() {
  const coordinates = {
    lat: 0,
    lng: 0,
  };

  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 10,
      center: coordinates,
    },
  );