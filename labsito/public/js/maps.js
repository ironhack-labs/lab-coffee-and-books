let initialCoords = { lat: 40.361052188252756, lng: -3.757851781350205 }

let myMap

function init() {
	getData()
	renderMap()
	autocompleteInput()
}

function getData() {
	axios
		.get('/api/lugares')
		.then(response => printMarkers(response.data))
		.catch(err => console.log(err))
}

function renderMap() {
	myMap = new google.maps.Map(document.querySelector('#myMap'), {
		zoom: 11,
		center: initialCoords,
	})

	myMap.addListener('click', mapsMouseEvent => {
		let myData = mapsMouseEvent.latLng.toJSON()
		axios
			.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${myData.lat},${myData.lng}&key=----API----KEY`
			)
			.then(response => {
				let myPlaceLat = myData.lat
				let myPlaceLng = myData.lng
				let myPlaceDirection = response.data.results[0].formatted_address
				const myPlaceData = { myPlaceDirection, myPlaceLat, myPlaceLng }
				return myPlaceData
			})
			.then(myPlaceData => {
				return axios.post('http://localhost:5005/api/crear-lugar', myPlaceData)
			})
			.then(() => location.reload())
			.catch(error => console.log(error))
	})
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

function autocompleteInput() {
	var input = document.querySelector('#searchInput')

	var autocomplete = new google.maps.places.Autocomplete(input)

	autocomplete.addListener('place_changed', function () {
		var place = autocomplete.getPlace()

		if (place.geometry.viewport) {
			myMap.fitBounds(place.geometry.viewport)
		} else {
			myMap.setCenter(place.geometry.location)
			myMap.setZoom(17)
		}
	})
}
