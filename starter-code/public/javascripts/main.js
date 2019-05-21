let markers = []
let coordinates = []


function initMap() {
  var myLatLng = coordinates[0]//{lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });


}
initMap() 

function getPlace() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 13, lng: 43}
  });
  axios.get("/places/api")
   .then( response => {
     markPlace(response.data.places, map);
    
     //push coordinates to array need to passthem to the map somehow
     response.data.places.forEach((place, idx)=>{
      coordinates.push({lat: response.data.places[idx].location.coordinates[1],lng:response.data.places[idx].location.coordinates[0]})

    })
   })
   .catch(error => {
     console.log(error);
   })
 }

 

function markPlace(places, map){
  places.forEach(function(place){
    const center = {
      lat: place.location.coordinates[1],
      lng: place.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: place.name
    });
    markers.push(pin);
  });
}

getPlace();








// function markPlaces(places){
//   places.forEach(function(place){
//     var center = {
//       lat: place.location.coordinates[1],
//       lng: place.location.coordinates[0]
//     };
//     console
//     var pin = new google.maps.Marker({
//       position: center,
//       map: map,
//     });
//     markers.push(pin);
//   });
// }


// function getPlaces() {
//   axios.get("places/api")
//    .then( response => {
//      let coordinates = []
//      //console.log(response.data.places)

//      response.data.places.forEach((place, idx)=>{
//        coordinates.push({lat: response.data.places[idx].location.coordinates[1],lng:response.data.places[idx].location.coordinates[0]})
//       //console.log(response.data.places[idx].location.coordinates, idx)
//      })

//      console.log(coordinates)

//    })
//    .catch(error => {
//      console.log(error);
//    })
//  }



// getPlaces();



