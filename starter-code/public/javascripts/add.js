const loadData = (map) => {
  let marker;
  let color;
  google.maps.event.addListener(map, "click", function (e) {
    const location = {
      lat:e.latLng.lat(),
      lng:e.latLng.lng()
    }

    document.querySelector('input[name=latitude]').value = location.lat;
    document.querySelector('input[name=longitude]').value = location.lng;

    //color = p.type === "coffee shop" ? 'red' : 'blue';

    if(marker){marker.setMap(null)}
    marker = addMarker('Place position',location, map, color);

    document.querySelector('.locationStatus').innerHTML = "Ready";
  });
}
