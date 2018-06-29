window.onload = () => {
	
	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 25.766033, lng: -80.196191}
	});
	
	let center = {
    lat: undefined,
    lng: undefined
  };  
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      center = { lat: position.coords.latitude, lng: position.coords.longitude };
      map.setCenter(center);

      const currentPositionMarker = new google.maps.Marker({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        map: map,
        title: "You are here"
      });

    }, () => {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  
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