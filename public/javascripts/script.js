document.addEventListener('DOMContentLoaded', () => {

  function startMap() {
      const ironhackBCN = {
        lat: 41.3977381,
        lng: 2.190471916
      };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: ironhackBCN
      });
      const myMarker = new google.maps.Marker({
        position: {
          lat: 41.3977381,
          lng: 2.190471916
        },
        map: map,
        title: "I'm here"
      });
    }
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 20,
      center: {lat: 41.3977381, lng: 2.190471916 }
    });
  
    map.addListener('click', function(e) {
      placeMarkerAndPanTo(e.latLng, map);
    });
  }
  
  function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    map.panTo(latLng);
  }
    
    startMap();
    initMap();
    
}, false);
