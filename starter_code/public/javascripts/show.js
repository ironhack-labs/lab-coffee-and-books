window.onload = () => {
    var placeId = document.getElementById("placeName").getAttribute("data-id");
    var url = `/api/${placeId}`;

    axios
        .get(url)
        .then(response => {
            const place = response.data.place;
            const position = { lat: place.location.coordinates[1], lng: place.location.coordinates[0] };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: position
            });
            const marker = new google.maps.Marker({
                position: position,
                map: map,
                title: place.name
            });
        })
        .catch(error => {
            console.log(error);
        });
};
