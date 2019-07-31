window.onload = () => {
	console.log('funciono')
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: { lat: 41.38623, lng: 2.17498 }
	})
	getPlaces(map)
}
function getPlaces(map) {
	axios
		.get('/api')
		.then(allPlaces => placePLaces(allPlaces.data, map))
		.catch(err => console.log('Ha habido un error: ', err))
}

function placePLaces(allPlaces, theMap) {
	allPlaces.forEach(elm => {
		const locatedAt = {
			lat: elm.lat,
			lng: elm.lng
		}

		new google.maps.Marker({
			position: locatedAt,
			map: theMap,
			title: elm.name
		})
	})
}
