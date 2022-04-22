function initMap() {
    const { Map, Marker } = google.maps;

    const map = new Map(document.querySelector("#placesMap"), {
        center: { lat: 40.392499, lng: -3.698214 },
        zoom: 10,
    });

    // const places = [
    //     {
    //         placeName: "",
    //         placeType: "",
    //         placeLocation: {
    //             type: "",
    //             coordinates: [],
    //         },
    //     },
    // ];

    axios
        .get("/api/places-data")
        .then((response) => {
            const { data } = response;
            data.forEach((place) => {
                const { placeName, placeType, placeLocation } = place;
                // const [lat, lng] = placeLocation.coordinates;
                const lat = placeLocation.coordinates[0];
                const lng = placeLocation.coordinates[1];

                new Marker({
                    position: { lat, lng },
                    map,
                });
            });
        })
        .catch((err) => {
            console.error(err);
        });

    new Marker({
        position: { lat: 40.392499, lng: -3.698214 },
        map,
    });
}
