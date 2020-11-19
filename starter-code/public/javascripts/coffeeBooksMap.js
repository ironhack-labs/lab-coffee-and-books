let map

function initMap(){
    getCoffesBooksFromApi()
}

function getCoffesBooksFromApi(){

    axios.get('api/coffeeBooks')
        .then(response => drawMap(response.data))
        .catch(err => console.log('hubo un error', err))

}

function drawMap(coffeesAndBooks){
    map = new google.maps.Map(document.querySelector('#coffeeBooksMap'),
    {
        center: { lat: 0, lng:0 },
        zoom: 17
    })

    coffeesAndBooks.forEach(element => {

        let center = {
            lat: element.location.coordinates[1],
            lng: element.location.coordinates[0]
        }

        let icon = { url: "", scaledSize: new google.maps.Size(40, 50) }
        element.type === "bookStore" ? icon.url = "https://storage.needpix.com/rsynced_images/icon-2070751_1280.png" : icon.url = 'https://i.pinimg.com/originals/31/55/7b/31557b3dda848a022ce96377a62e24a5.png'

        new google.maps.Marker({
            map, 
            position: center,
            icon
        })
        
    });



    map.setCenter({
        lat: coffeesAndBooks[0].location.coordinates[1], 
        lng: coffeesAndBooks[0].location.coordinates[0]
    })

} 

let key = process.env.KEY