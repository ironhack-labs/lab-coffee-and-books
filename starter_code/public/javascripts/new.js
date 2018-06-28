window.onload = () => {
	
	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 25.766033, lng: -80.196191}
  });
  
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
	});
  
  function geocodeAddress(geocoder, resultsMap) {
	  var address = document.getElementById('address').value;
	  
	  geocoder.geocode({'address': address}, function(results, status) {
	    if (status === 'OK') {
	      resultsMap.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	        map: resultsMap,
	        position: results[0].geometry.location
	      });
	      document.getElementById('latitude').value = results[0].geometry.location.lat();
	      document.getElementById('longitude').value = results[0].geometry.location.lng();
	    } else {
	      alert('Geocode was not successful for the following reason: ' + status);
	    }
	  });
	}

	document.getElementById('submit').addEventListener('click', () => {
		axios.get(`http://localhost:3000/api/search?lat=${center.lat}&lng=${center.lng}`)
		.then(places => {
			deleteMarkers();
			placePlaces(places);
		})
		.catch(error => {
      console.log('error'); 
    });
	});
	
};