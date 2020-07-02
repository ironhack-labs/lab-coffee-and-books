let myMap

window.onload = () => {

    let mapOptions = {
        center: {
            lat: 40.416664,
            lng: -3.703813    
        },
        zoom: 15,
        styles: mapStyles.retro
    }

    

    myMap = new google.maps.Map(document.getElementById("myMap"), mapOptions)

    markerOptions()


    function markerOptions() {
        const hiddenID = document.querySelector("#hiddenId").value
        axios.get(`/place/${hiddenID}/api`)
            .then(placesApi => {
            
                const places = placesApi.data
console.log(places)
                places.forEach(elm => {
                    console.log(elm)
                    let center = {
                    
                        lat: elm.location.coordinates[0],
                        lng: elm.location.coordinates[1]
                    }

                    new google.maps.Marker({
                        position: center,
                        map: myMap,
                        title: elm.name
                    })
                                        
                })
                myMap.setCenter({
                    lat: places[0].location.coordinates[0],
                    lng: places[0].location.coordinates[1]
                })
            })
            .catch(err => console.log('error', err))
    }

}