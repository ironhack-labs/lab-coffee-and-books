const loadData = (map) => {

  let marker;
  google.maps.event.addListener(map, "click", function (e) {

    //lat and lng is available in e object
    const location = {
      lat:e.latLng.lat(),
      lng:e.latLng.lng()
    }


    document.querySelector('input[name=latitude]').value = location.lat;
    document.querySelector('input[name=longitude]').value = location.lng;

    if(marker){ marker.setMap(null) }
    marker = addMarker('Place Position',location, map);

    document.querySelector('.locationStatus').innerHTML = "Ready";

  });

}