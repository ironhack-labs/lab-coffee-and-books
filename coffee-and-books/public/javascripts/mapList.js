const ironhackBCN = {
  lat: 41.386230, 
  lng: 2.174980
};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN
  });
  var bounds = new google.maps.LatLngBounds();
  console.log(marks)
 marks.forEach(e=>{
  position={
    lat:e.location.coordinates[0],
    lng:e.location.coordinates[1]
  }
  new google.maps.Marker({
      position,  
      map,
      title:e.name
    })
    bounds.extend(position)
  })
    
    map.fitBounds(bounds);