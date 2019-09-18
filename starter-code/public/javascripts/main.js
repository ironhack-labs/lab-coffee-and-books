window.onload = () => {
  const ironhackMAD = {
    lat: 40.392602,
    lng: -3.698261,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: ironhackMAD,
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