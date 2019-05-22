

  

const drawPlaces=(map)=>{
axios.get('/places/api')
  .then(results => {
    console.log(results)
    results.data.forEach(place => {
      console.log(place)
      /*  let location = {
         lat:place.location.coordinates[1],
         lng: place.location.coordinates[0]
       }
       console.log(location) */

      // console.log(location, map)
      const marker1 = new google.maps.Marker({
        position: {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0]
        },
        map: map,
        title: `${place.name} (${place.type})`
      })
      console.log(marker1)

    })

    //console.log(results)
  })
  .catch(err => console.log(err))
}

  
function initMap() {
  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  }
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 5,
      center: ironhackBCN
    }
  )
  drawPlaces(map)
}