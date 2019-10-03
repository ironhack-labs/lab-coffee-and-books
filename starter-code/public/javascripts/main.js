window.onload = () => {
  const ironhackSP = {
    lat: -23.561738, 
    lng: -46.660181
  };
  
  const markers = []
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackSP
  });

  let center = {
    lat: undefined,
    lng: undefined
  };

const getPlaces = () => {
  axios.get('http://localhost:3000/api')
    .then(response => {
      console.log(response.data);      
      placePlaces(response.data)
    })
    .catch(err => console.log(err))
}

const placePlaces = (places) => {
  places.forEach((place) => {
    center = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0],
    }
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: place.name
    })
    markers.push(pin)
  });
}

getPlaces()
};