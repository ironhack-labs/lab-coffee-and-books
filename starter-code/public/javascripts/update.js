$(document).ready(function() {
	

	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: parseFloat(document.getElementById('latitude').value), lng: parseFloat(document.getElementById('longitude').value)}
  });
  new google.maps.Marker({
    map: map,
    position: {lat: parseFloat(document.getElementById('latitude').value), lng: parseFloat(document.getElementById('longitude').value)}
  });
  
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress();
  });
  
  function geocodeAddress() {
	  var address = document.getElementById('address').value;
	  
	  geocoder.geocode({'address': address}, function(results, status) {
	    if (status === 'OK') {
	      map.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	        map: map,
	        position: results[0].geometry.location
	      });
	      document.getElementById('latitude').value = results[0].geometry.location.lat();
	      document.getElementById('longitude').value = results[0].geometry.location.lng();
	    } else {
	      alert('Geocode was not successful for the following reason: ' + status);
	    }
	  });
	}
});