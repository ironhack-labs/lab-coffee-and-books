let myMap

window.onload = () => {
  
  const ironhackMAD = {
    lat: 40.392450,
    lng: -3.698187
  };

  myMap = new google.maps.Map(document.getElementById('myMap'),{
    zoom: 16,
    center: ironhackMAD
  })

  getPlaces()
}

function getPlaces() {
  axios
    .get('/places/api')
    .then(response => setPlaces(response.data.placesArr))
    .catch(err => console.log('err: ', err))
}

function setPlaces(arr) {

  arr.forEach(place => {

    const center = {
      lat: place.location.lat,
      lng: place.location.lng
    }

    new google.maps.Marker({
      position: center,
      map: myMap,
      title: place.name
    })

  })
}