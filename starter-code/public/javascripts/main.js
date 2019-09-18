window.onload = () => {
  const callao = {
    lat: 40.420571,
    lng: -3.705667,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: callao,
  });

  // axios.get('/places')
  //   .then(({ data }) => {
  //     data.forEach((place) => {
  //       new google.maps.Marker({
  //         position: {
  //           lat: place.location.coordinates[1],
  //           lng: place.location.coordinates[0],
  //         },
  //         title: place.name,
  //         map,
  //       });
  //     });
  //   });
};
