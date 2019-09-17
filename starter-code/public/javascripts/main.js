window.onload = () => {
  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN,
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
