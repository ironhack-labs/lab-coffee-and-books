let map

function initMap() {
    getRestaurantDatafromAPI()
}

function getRestaurantDatafromAPI() {
    axios.get('/api')
        .then(response => drawMap(response.data))
        .catch(err => console.log('Hubo un error:', err))
}

function drawMap(places) {

    const mapDiv = document.querySelector('#map')
    map = new google.maps.Map(document.querySelector('#map'),
    {
        center: { lat: 40, lng: 0},
        zoom: 13
    })

    if (mapDiv.className === "index") {
        places.allPlaces.forEach ( elm =>{

            let pinPoint = {
                lat: elm.coordinates.lat,
                lng: elm.coordinates.lng
            }

            let markerImg 

            (elm.type === 'bookstore') ? markerImg = 'https://www.iconsdb.com/icons/preview/orange/book-xxl.png' : markerImg = 'https://www.iconsdb.com/icons/preview/black/coffee-7-xxl.png'
            //no conseguí cambiar los tamaños pero los iconos sí se personalizaban en función del tipo
            new google.maps.Marker({
                map,
                position: pinPoint,
                //icon: markerImg,
                //Size: (20, 32),
                title: elm.name
            })
        })
        map.setCenter({ lat: places.allPlaces[0].coordinates.lat, lng: places.allPlaces[0].coordinates.lng})

   }
    else {
        
        console.log(document.querySelector('#lat-input').value)
        latitude = parseFloat(document.querySelector('#lat-input').value)
        longitude = parseFloat(document.querySelector('#lng-input').value)

        const pinPoint = {
            lat: latitude,
            lng: longitude
            }
        const name = document.querySelector('#name-input').value
        new google.maps.Marker({
            map,
            position: pinPoint,
            //icon: markerImg,
            //Size: (20, 32),
            title: name
        }) 
        map.setCenter({ lat:latitude, lng: longitude})   
        map.zoom = 16
    }

    

}