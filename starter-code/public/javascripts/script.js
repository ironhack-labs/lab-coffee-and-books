window.onload=()=>{

  const ironhackMAD = {
    lat: 40.392449,
    lng: -3.697465,
  };

  const markers = [];


  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: ironhackMAD,
  });

  axios.get('/places')
    .then(({ data }) => {
      data.forEach((place) => {
        new google.maps.Marker({
          position: {
            lat: place.latitud,
            lng: place.longitud,
          },
          title: place.name,
          map,
        });
      });
    });

}

