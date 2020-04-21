let myMap;

window.onload = () => {

  myMap = new google.maps.Map(document.getElementById('my-map'), {
      
		center: {
			lat: 40.416900,
			lng: -3.703400,
    },

    zoom: 14,
    styles: mapStyles.night
      
    })
  
  getPins()
	
}

function getPins() {

  	axios
		.get('/api')
    .then(placesFromAPI => {
      
      const places = placesFromAPI.data;

      places.forEach(elm => {

        let center = {
          lat: elm.location.coordinates[0],
          lng: elm.location.coordinates[1]
        }

        new google.maps.Marker({
          position: center,
          map: myMap,
          title: elm.name
        })

      })

		})
		.catch(error => console.log(error));

}