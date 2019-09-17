window.onload = () => {
  const ironhack = {
    lat: 40.392548,
    lng: -3.697419
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: ironhack,
  });

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