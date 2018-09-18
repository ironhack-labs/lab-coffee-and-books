const ironhackBCN = {
  lat: 41.386230, 
  lng: 2.174980
};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN
  });
  // const geocoder = new google.maps.Geocoder();
  let mark = new google.maps.Marker({
    map,
    title:document.getElementById('name').value
  })
  google.maps.event.addDomListener(map,'click',e=>{
    const {lat,lng} = {lat:e.latLng.lat(),lng:e.latLng.lng()}
    document.getElementById('lat').value=lat
    document.getElementById('lng').value=lng
    
    mark.setPosition({lat,lng})
  })
