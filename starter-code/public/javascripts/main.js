window.onload = () => {

  if (document.getElementById('map')){
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: { lat: 41.386230, lng: 2.174980 }
  })

  
  getPlaces(map)

} else if (document.getElementById('mymap')){

  const mymap = new google.maps.Map(document.getElementById('mymap'), {
    zoom: 5,
    center: { lat: 40.395371, lng: -3.650565 }
  })
  
  getOnePlace(mymap)

}
  
}


function getPlaces(map) {

  axios.get('/places/api')
    .then(allPlaces => locatePlaces(allPlaces.data, map))
    .catch(err => console.log(err))
}


function locatePlaces(allPlaces, theMap) {

  allPlaces.forEach(elm => {

    const locatedAt = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }

    new google.maps.Marker({
      position: locatedAt,
      map: theMap,
      title: elm.name
    })

  })
}



function getOnePlace(mymap) {

  axios.get('/places/api')
    .then(place => locateOnePlace(place.data, mymap))
    .catch(err => console.log(err))
}


function locateOnePlace(place, theMap) {

  place.forEach(elm => {

    const locatedAt = {
      lat: elm.location.coordinates[1],
      lng: elm.location.coordinates[0]
    }

    new google.maps.Marker({
      position: locatedAt,
      map: theMap,
      title: place.name
    })

  })
}