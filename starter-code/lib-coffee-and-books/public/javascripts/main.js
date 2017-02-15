$(document).ready(function(){
  const ironhack = {
    lat: 41.3977381,
    lng: 2.190471916
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: ironhack
  });

var myMarker = new google.maps.Marker({
    position: {
    	lat: 41.3977381,
    	lng: 2.190471916
    },
    map: map,
    title: "I'm here"
  });


});
