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

  axios.get('/places/api')
  .then(results=>{
    results.data.forEach(place=>{
        //console.log(place)
        const location = {
          lat:place.location.coordinates[1],
          lng: place.location.coordinates[0]
        }
        //console.log(location)

        // console.log(location, map)
        new google.maps.Marker({
          position: location,
          map: map,
          title: `${place.name} (${place.type})`
        })
    })
      
    //console.log(results)
  })
  .catch(err=>console.log(err))
}