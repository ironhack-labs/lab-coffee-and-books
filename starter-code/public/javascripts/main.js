window.onload = () => {
	console.log('funciono')
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: { lat: 41.38623, lng: 2.17498 }
	})
}
