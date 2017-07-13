

$(document).ready(function(){
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

});
