let coffeeMap;

function init() {
	renderMap();
	/* getLocation(); */
	getCoffeeShops();
}

function renderMap() {
	coffeeMap = new google.maps.Map(document.getElementById("coffeeMap"), {
		zoom: 14,
		center: { lat: 40.630449259841946, lng: -3.164655722002858 },
		styles: mapStyles.aubergine,
	});
}

/* function getLocation() {
	navigator.geolocation.getCurrentPosition(
		(position) => placeMap(position),
		(error) => console.log("ERROR", error)
	);
}

function placeMap({ coords }) {
	const { latitude: lat, longitude: lng } = coords;
	coffeeMap.setCenter({ lat, lng });

	new google.maps.Marker({
		position: { lat, lng },
		map: coffeeMap,
	});
} */

function getCoffeeShops() {
	axios
		.get("/api/cafeterias")
		.then((res) => setMarkers(res.data))
		.catch((err) => console.log(err));
}

function setMarkers(cafeterias) {
	cafeterias.forEach((place) => {
		const lat = place.location.coordinates[0];
		const lng = place.location.coordinates[1];

		new google.maps.Marker({
			map: coffeeMap,
			position: { lat, lng },
			title: place.name,
		});
	});
}
