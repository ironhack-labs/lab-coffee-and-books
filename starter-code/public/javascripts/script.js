const directionsService = new google.maps.DirectionsService;
const directionsDisplay = new google.maps.DirectionsRenderer;

document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');
}, false);

const startMap = () => {
  const markers = [];

  const consolacao = {
  	lat: -23.5607694,
    lng: -46.6518032,
  };
  let map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: consolacao,
    },
  );

  const getLocations = () => {
    if (document.URL.length < 23) {
      axios.get('/api/locations')
        .then((response) => {
          placeLocations(response.data.places);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const id = document.URL.slice(document.URL.length - 24);
      axios.get('/api/locations/' + id)
        .then((response) => {
          placeLocations([response.data.location]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const placeLocations = (locations) => {
    locations.forEach((location) => {
      // console.log(location.location);
      if (location.location) {
        const center = {
          lat: location.location.coordinates[0],
          lng: location.location.coordinates[1],
        };
        const pin = new google.maps.Marker({
          position: center,
          map,
          title: location.name,
        });
        markers.push(pin);
      }
    });
  };

  getLocations();


  // const directionRequest = {
  //   origin: 'ironhack, SP',
  //   destination: 'Praça Charles Miler, SP',
  //   travelMode: 'WALKING',
  // };

  // directionsService.route(
  //   directionRequest,
  //   function(response, status) {
  //     if (status === 'OK') {
  //       // everything is ok
  //       directionsDisplay.setDirections(response);
  
  //     } else {
  //       // something went wrong
  //       window.alert('Directions request failed due to ' + status);
  //     }
  //   }
  // );
  // directionsDisplay.setMap(map);
};

startMap();
