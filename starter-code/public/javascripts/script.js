
initMap = () => {
  
  let mapOptions = {zoom: 14}
  const myMap = new google.maps.Map(document.querySelector("#myMap"), mapOptions)
  
  axios.get('/api')
  .then(allPlaces => {
    const placesData = allPlaces.data
    placesData.forEach(element => {
      {
        const center = {
          lat: element.location.coordinates[0],
          lng: element.location.coordinates[1]
        }
        new google.maps.Marker({
          position: center,
          map: myMap,
          title: element.name
        })
      }
    })
    myMap.setCenter({
      lat: placesData[0].location.coordinates[0],
      lng: placesData[1].location.coordinates[1]
    })
  })
  .catch(error => console.log(error))
  
}