let myMap

window.onload = () => {

  const ironhackBCN = {
    lat: 37.160593,
    lng: -3.601267
  };


  myMap = new google.maps.Map(document.getElementById('myMap'), {
    zoom: 14,
    center: ironhackBCN
  });
 
getPlaces()
 

}

function getPlaces() { 
  axios.get("/places/api")
    .then(response => { 
     //console.log("LA RESPUESTA DEL SERVIDOR ES ", response.data.places)
      placePlaces (response.data.places)
    })
    .catch(error => console.log(error))
}

function placePlaces(places) { 
  console.log (places)
  places.forEach(thePlace => { 
    const center = {
      lat: thePlace.location.coordinates[1],
      lng: thePlace.location.coordinates[0]
    }
    console.log(center)
    new google.maps.Marker({
      position: center,
      map: myMap,
      title:thePlace.type
    })
  })
  

}









// Mapa básico

// initMap = () => {

//     let mapOptions = {
//         center: directions.ironhackBCN.coords,
//         zoom: 15,
//         styles: mapStyles.aubergine
//     }

//     const myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions)


//     let markerOptions = {
//         position: directions.ironhackBCN.coords,
//         map: myMap,
//         title: directions.ironhackBCN.title
//     }

//     new google.maps.Marker(markerOptions)
// }

