document.addEventListener(
  "DOMContentLoaded",
  () => {
    window.chosenLocation = null;
    window.clickPos = null;

    function startMap() {

      const ironhackBCN = {
        lat: 41.3977381,
        lng: 2.190471916
      };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: ironhackBCN
      });

      const setPosOnForm = (latlng) => {
        document.getElementById('latitude').value = latlng.lat;
        document.getElementById('longitude').value = latlng.lng;
      }    

      const marker = new google.maps.Marker({
        position: new google.maps.LatLng({
          lat: clickPos.lat,
          lng: clickPos.lng
        }),
        map: map,
        title: "Coffe Shop"
      });

      map.addListener("click", function(e) {
        const clickPos = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        };
        console.log(clickPos);
        marker.setPosition(clickPos);
        setPosOnForm(clickPos);
      });

      //sets and listener so we can move the marker to the chosen coordinates
      map.addListener("click", function(e) {
        window.chosenLocation = {
          lat: e.latLng.lat,
          lng: e.latLng.lng
        };
        marker.setPosition(chosenLocation);
      });
    }

    startMap();
  },
  false
);
