function startMap() {

  const map = new google.maps.Map(
      document.getElementById('map'),
      {
          zoom: 15,
          center: {
              lat: 40.3923,
              lng: -3.6984
          }
      }
  )

  const bounds = new google.maps.LatLngBounds();

  myPlaces.forEach(p => {
          loc ={ lat: p.loc.coordinates[0], lng: p.loc.coordinates[1] }
      bounds.extend(loc);
      createWindow(map,loc , `<h2>${p.name}</h2><h2>${p.kindOf}</h2>`);
  });
  map.fitBounds(bounds);

  function createWindow(map, pos, content) {

      var infowindow = new google.maps.InfoWindow({
          content: content
      });
      var marker = new google.maps.Marker({
          position: pos,
          map: map,
          content: content
      });
      marker.addListener('click', function () {
          infowindow.open(map, marker);
      });
  }
}