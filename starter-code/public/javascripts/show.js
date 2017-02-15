$(document).ready(function(){
	const nuevosMinisterios = {
    lat: 40.443473,
    lng: -3.692545
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: nuevosMinisterios
  });

      let title = myPlace.name;
      let position = {
        lat: myPlace.location.coordinates[1],
        lng: myPlace.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ position, map, title  });
			map.setCenter(position);

});
