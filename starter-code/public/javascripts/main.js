window.onload = () => {
  const centerPoint = {
    lat: 40.4167,
    lng: -3.70325,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: centerPoint,
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
