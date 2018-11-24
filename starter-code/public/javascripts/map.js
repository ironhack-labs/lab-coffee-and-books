function startMap() {
    const ironhackBCN = {
        lat: 41.3977381,
        lng: 2.190471916
    };
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 5,
            center: ironhackBCN
        }
    );

    axios.get('/getPlaces')
        .then((res) => {
            console.log(res.data.places);
            res.data.places.forEach((elem) => {
                console.log('entra');
                new google.maps.Marker({
                    position: new google.maps.LatLng({
                        lat: elem.lat,
                        lng: elem.long,
                    }),
                    map,
                })
            });
        })
        .catch(err => console.log(err));


}

startMap();
