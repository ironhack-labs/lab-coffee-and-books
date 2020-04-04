let center = {
  lat: 0,
  lng: 0
}

function startMap() {
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: center
    }
  );

  axios
    .get('/api')
    .then(data => {
      data.data.forEach(element => {
        new google.maps.Marker({
          position: {
            lat: element.location.coordinates[1],
            lng: element.location.coordinates[0]
          },
          map: map,
          title: element[name]
        });
      });
    })
    .catch(err => console.log(err))
}

startMap()
