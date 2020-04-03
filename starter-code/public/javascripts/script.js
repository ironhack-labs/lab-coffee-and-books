const initMap = () => {
	const map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -23.596787,
			lng: -46.654218,
		},
		zoom: 11,
	});

	axios
		.get('/api/places')
		.then((placesFromAPI) => {
			const places = placesFromAPI.data;

			places.forEach((place) => {
				const [longitude, latitude] = place.location.coordinates;

				const latLng = {
					lat: latitude,
					lng: longitude,
				};

				new google.maps.Marker({
					position: latLng,
					map: map,
					title: places.name,
				});
			});
		})
		.catch((error) => console.log(error));
};

if (document.querySelector('#map')) initMap();
