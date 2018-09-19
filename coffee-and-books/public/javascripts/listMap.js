document.addEventListener(
  "DOMContentLoaded",
  () => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13
    });
    const bounds = new google.maps.LatLngBounds();
    geolocalize().then(center => {
      map.setCenter(center);
     /*  if (count(markers) <= 1) {
        map.setMaxZoom(15);
        map.fitBounds(bounds);
        map.setMaxZoom(Null);
        map.setCenter(center);
      } */

      places.forEach(place => {
        let position =  {
          lat: place.location.coordinates[0],
          lng: place.location.coordinates[1]
        }
        new google.maps.Marker({
         position,
          map: map,
          title: place.name
        });
        bounds.extend(position);
      });
    });
/*     const bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < places.length; i++) {
      bounds.extend(places[i].getPosition());
    }
    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
    map.setZoom(map.getZoom() - 1);
    if (map.getZoom() > 15) {
      map.setZoom(15);
    } */
    map.fitBounds(bounds);
  },
  false
);
