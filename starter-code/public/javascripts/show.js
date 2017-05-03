$(document).ready(function(){

	var titleTag = document.getElementById('libraryName');
	var url = 'http://localhost:3000/api/' + titleTag.dataset.id;

	$.ajax({
    url: url,
    method: 'GET',
    success: printMapAndMarker,
    error: function(error) {
      console.log('error');
    }
  });

  function printMapAndMarker(library){
  	var position = {
  	  lat: library.location.coordinates[1],
  	  lng: library.location.coordinates[0]
  	};

  	var map = new google.maps.Map(document.getElementById('map'), {
  	  zoom: 2,
  	  center: position
  	});

  	var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: library.name
    });
  }
});
