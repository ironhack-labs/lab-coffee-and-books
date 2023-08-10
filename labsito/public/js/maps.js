const initialCoords = { lat: 40.361052188252756, lng: -3.757851781350205 }
let myMap

function init() {
	renderMap()
	getData()
}

function renderMap() {
	myMap = new google.maps.Map(document.querySelector('#myMap'), {
		zoom: 19,
		center: initialCoords,
	})

	let infoWindow = new google.maps.InfoWindow({
		content: 'Haz click en el mapa para añadir un sitio',
		position: initialCoords,
	})
	infoWindow.open(myMap)
	// Configure the click listener.
	myMap.addListener('click', mapsMouseEvent => {
		// Close the current InfoWindow.
		infoWindow.close()
		let myData = mapsMouseEvent.latLng.toJSON()
		console.log(myData)
		axios
			.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${myData.lat},${myData.lng}&key=AIzaSyC84LkpQNYywBK6UmzK78jP0ZzGrf89IzA`
			)
			.then(response =>
				console.log(response.data.results[0].formatted_address, myData.lat, myData.lng)
			)
			.catch(error => console.log(error))
		// Create a new InfoWindow.
		// infoWindow = new google.maps.InfoWindow({
		// 	position: mapsMouseEvent.latLng,
		// })
		// infoWindow.setContent(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2))
		// infoWindow.open(myMap)
	})
}

function getData() {
	axios
		.get('/api/lugares')
		.then(response => printMarkers(response.data))
		.catch(err => console.log(err))
}

function printMarkers(places) {
	places.forEach(eachPlace => {
		const position = {
			lat: eachPlace.location.coordinates[1],
			lng: eachPlace.location.coordinates[0],
		}

		new google.maps.Marker({
			position,
			map: myMap,
			title: eachPlace.name,
		})
	})
}
