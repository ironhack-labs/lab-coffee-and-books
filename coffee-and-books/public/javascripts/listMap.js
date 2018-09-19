document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
  });
  geolocalize().then(center => {
    map.setCenter(center);
    let bounds = new google.maps.LatLngBounds();
    bounds.extend(center);

    places.forEach(place => {
      marker = new google.maps.Marker({
        position: {
          lat:place.location.coordinates[0],
          lng:place.location.coordinates[1]
        },
        map: map,
        title: place.name+'\n'+ place.kind,
      });
      if (place.kind == 'books'){marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');}
      else {marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');}
      console.log("mARKER: ", marker);
      bounds.extend(marker.position);
    })
    
    
    map.fitBounds(bounds);
  });


}, false);