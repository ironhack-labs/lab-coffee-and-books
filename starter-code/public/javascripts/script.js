const renderMapALl = (map) => {
	axios
		.get('/api/places')
		.then((placesFromAPI) => {
			const places = placesFromAPI.data;

			places.forEach((place) => {
				const [longitude, latitude] = place.location.coordinates;

				const location = {
					lat: latitude,
					lng: longitude,
				};

				new google.maps.Marker({
					position: location,
					map: map,
					title: place.name,
				});
			});
		})
		.catch((error) => console.log(error));
};

const renderMapOne = (map) => {
	const placeName = document.querySelector('#place-name').innerText;
	const placeLat = document.querySelector('#place-lat').innerText;
	const placeLng = document.querySelector('#place-lng').innerText;

	const lat = Number(placeLat.replace('Latitude: ', ''));
	const lng = Number(placeLng.replace('Longitude: ', ''));
	
	const location = { lat, lng };

	new google.maps.Marker({
		position: location,
		map: map,
		title: placeName,
	});
};

const initMap = () => {
	const map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -23.596787,
			lng: -46.654218,
		},
		zoom: 11,
	});

	if (document.querySelector('.map1')) renderMapALl(map);

	if (document.querySelector('.map2')) renderMapOne(map);
};

if (document.querySelector('#map')) initMap();
