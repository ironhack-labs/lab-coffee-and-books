let myMap 

//inializar el mapa

window.onload = () => {
    const madrid = {
        lat: 40.381137,
        lng: -3.603120
    };
    myMap = new google.maps.Map(document.getElementById(myMap), {
        zoom: 16,
        center: Madrid,
        //styles: mapStyles.silver
    })

    getPlaces()
}
function getPlaces() {
    axios.get("/places/api")
        .then(res => {
            console.log("Respuesta del servidor:", response)
            setPlaces(response.data.Places)
        })
        .catch(error => console.log(error))
}

function setPlaces(places) {
    places.forEach(place => {
        const center = {
            lat: place.location.coordinates.lat,
            lng: place.location.coordinates.lng
        }
        
        new google.maps.Maker({
            position: center,
            map: myMap,
            title: place.name,
            
        })
        
    })
    myMap.setCenter({
        lat: places[1].location.coordinates.lat,
        lng: places[1].location.coordinates.lng
    })
    
}