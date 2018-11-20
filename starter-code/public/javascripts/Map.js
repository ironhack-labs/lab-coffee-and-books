document.addEventListener('DOMContentLoaded', () => {
  
  const ironhackBCN = {
    lat: 41.386230,
    lng: 2.174980
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: ironhackBCN,

  });

  if(document.querySelectorAll("form").length){
    console.log("aguiya");
    map.addListener("click", function (e) {
      window.chosenLocation = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
      marker.setPosition(chosenLocation);
      document.querySelector("#lat-pos").value = window.chosenLocation.lat;
      document.querySelector("#lng-pos").value = window.chosenLocation.lng;
    })
  
  }

  //sets and listener so we can move the marker to the chosen coordinates


  const markers = []
  //marker creation and instantiation in the ajax requested location
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng({
      lat: ironhackBCN.lat,
      lng: ironhackBCN.lng
    }),
    map: map,
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    },
    title: "Punto"
  });


  function getPlaces() {
    axios.get("/place/api")
      .then(response => {
        drawPlaces(response.data.places);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function drawPlaces(places) {

    places.forEach(function (place) {
      console.log(place)
      const center = {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
      };
      const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name
      });
      markers.push(marker);
    });
  }
  getPlaces();


}, false);