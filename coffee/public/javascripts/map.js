function main(){

  function renderMarkers(map, position, establishments) {
    const center = {
      lat: position.coords.latitute;
      lng: position.coords.longitude;
    };
    
    map.setCenter(center);
    map.setZoom(15);

    const marker = new google.maps.Marker({
      position: { 
        lat: center.lat, 
        lng: center.lng
      }, 
      title: 'Coffee here'
    });
    marker.setMap(map);
  
  //comment
  }

const coffee = document.getElementById('coffee');
const map = new google.maps.Map(coffee, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});

axios.get( link )
then.((response) => {
  coffee
})

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function (position){
  
  }, function(){
    console.error('Error');
  });
  } else {
  console.error('Browser does not support geolocation');
  }



}

window.onload = main;