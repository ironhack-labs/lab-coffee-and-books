


function initApp() {
  drawMap()
    
  getPlacesFromApi()
}
     

function drawMap(){
    
  const mapInstance = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: 37.381884,
      lng: -5.987307
    }, zoom: 14

  })

}
    // new google.maps.Marker({
    //     map: mapInstance,
    //     position: {
    //     lat: 41.3977381,
    //     lng: 2.190471916
    //   }
       
    // })


class PlacesApiHandler {

    constructor() {

        console.log('API handler inicializada')

        this.axiosApp = axios.create({
            baseURL: 'http://localhost:3000/api/locales'
        })
    }
 getOnePlace = placeId => this.axiosApp.get(`/${placeId}`)

}

const apiHandler = new PlacesApiHandler()

function getPlacesFromApi() {
 
    apiHandler
      .getOnePlace('5fb6ddea3d28278f763386f2')
      .then(response => {
       
        drawMarkers(response.data)
      })
      .catch(err => console.log(err))
}
  
function drawMarkers(restaurant) {

    

        let position = { lat: restaurant.location.coordinates[0], lng: restaurant.location.coordinates[1] }

        new google.maps.Marker({
            map: mapInstance,
            position,
            title: restaurant.name
        })
  

    mapInstance.setCenter({ lat: restaurants.location.coordinates[0], lng: restaurants.location.coordinates[1] })
}
