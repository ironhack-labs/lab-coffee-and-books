document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  const defaultLocation = {
    lat: 51,
    lng: 0
  }

  var map;
  window.chosenLocation = null;
  window.marker = null;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: defaultLocation,
      zoom: 4
    });

    if (document.querySelectorAll('form').length) {
      marker = new google.maps.Marker({
        position: defaultLocation,
        map: map
      });
  
      initForm();

      map.addListener("click", function (e) {
        window.chosenLocation = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        }
        marker.setPosition(chosenLocation);
    
        addToForm(chosenLocation);
      });

    } else {
      getPlaces();
    }

  }

  initMap();
  
  function initForm() {
    const lat = document.getElementById('lat-pos').value === '' ? defaultLocation.lat : document.getElementById('lat-pos').value;
    const lng = document.getElementById('lng-pos').value === '' ? defaultLocation.lng : document.getElementById('lng-pos').value;

    document.getElementById('lat-pos').value = lat;
    document.getElementById('lng-pos').value = lng;

    window.chosenLocation = {
      lat: +lat,
      lng: +lng
    }
    marker.setPosition(chosenLocation);
    map.setCenter(chosenLocation);
  }

  function addToForm(location) {
    document.getElementById('lat-pos').value = location.lat;
    document.getElementById('lng-pos').value = location.lng;
  }

  function getPlaces() {
    axios.get("/place/api")
    .then( response => {
      placePlaces(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  function placePlaces(places){
    let markers = []
    places.forEach(function(place){
      const center = {
        lat: place.location.lat,
        lng: place.location.lng
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name
      });
      markers.push(pin);
    });
  }
}, false);
