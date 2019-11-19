let theMap = new google.maps.Map(document.getElementById("map"),{
  zoom: 10
})

function startMap(theMap) {
  
  new google.maps.Marker({
    position: {
      lat: {lat},
      lng: {lon}
    },
    map: theMap
  });
}



