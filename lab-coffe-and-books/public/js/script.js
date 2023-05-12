// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("lab-coffe-and-books JS imported successfully!");
});

let map

function initMap() {

  setUpMap()
  getPlacesJSON()
}


function setUpMap() {
 map = new google.maps.Map(
        document.querySelector('#map'),
        {
            zoom: 15,
            center: { lat: 40.392521370648154, lng:-3.6989879718518366 },
            styles: mapStyles.retro
        }
    )
}

function getPlacesJSON() {

    fetch('/api/places')  
      .then(res => res.json())
      .then(placesJSON => renderPlacesMarkers(placesJSON))
      .catch(err => console.log(err)) 
  }
  
  
function renderPlacesMarkers(placesJSON) {
  debugger;
  console.log(placesJSON)
    placesJSON.forEach(place => {
  
      const placeCoords = { lat: place.location.coordinates[0], lng: place.location.coordinates[1] }
      console.log({placeCoords})
    
      new google.maps.Marker({
        map: map,
        position: placeCoords,
        title: place.name
      })
  
    })
  }






initMap()