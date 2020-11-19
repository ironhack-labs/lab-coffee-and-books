let map
let icon

function initMap() {
  getPlaceDataFromAPI()
}

function getPlaceDataFromAPI() {

  axios.get('/api/map')
    .then(response => drawMap(response.data))
    .catch(err => console.log('Hubo un error:', err))
}


function drawMap(places) {

  map = new google.maps.Map(document.getElementById('#map'),//restaurantsMap
    {
      center: { lat: 50, lng: 80 },
      zoom: 14
    }
  )

  places.forEach(elm => {

    let center = {
      lat: elm.location.coordinates[0],
      lng: elm.location.coordinates[1]
    }
  
    if(elm.description === "coffee shop"){
      icon={url: 'http://www.cylabeth.com/ironhack/img/coffee_mini.png',scaledSize: new google.maps.Size(45, 45)}
    } 
    else{
      icon={url: 'http://www.cylabeth.com/ironhack/img/book_mini.png',scaledSize: new google.maps.Size(45, 45)}
    }

    new google.maps.Marker({ map, position: center,title:elm.address,icon })
  })
  

  map.setCenter({ lat: places[0].location.coordinates[0], lng: places[0].location.coordinates[1] })

}