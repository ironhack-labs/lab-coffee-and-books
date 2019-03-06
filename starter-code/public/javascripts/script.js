document.addEventListener('DOMContentLoaded', () => {

  console.log(window)
  
  const defaultPlace = {
    lat: 40.392757,
    lng: -3.698256
    }
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center:  defaultPlace
  })
  
    startMap = () => {
  
      map.addListener("click", function(e) {
        document.getElementById("latitude").value = e.latLng.lat();
        document.getElementById("longitude").value = e.latLng.lng();
      });
  
    const myMarker = new google.maps.Marker({
      position: defaultPlace,
      map: map,
      title: 'Defaul Place'
    })
  
  
    if (navigator.geolocation) {
  
      navigator.geolocation.getCurrentPosition((position) => {
  
        const myPosition = {
          lat: position.coords.latitude,
          lng:  position.coords.longitude
        }
  
        const myMarkerPosition = new google.maps.Marker({
          position: myPosition,
          map: map,
          title: "This is the default place"
        })
  
        console.log("posición", myPosition)
  
      }, () => {
        console.log("Error en la geolocalización")
      })
  
    } else {
      console.log("Comprate un pc")
    }
  
  
    }
  
  
    goToPlace = () => {
  
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer;
  
      const directionRequest = {
        origin: defaultPlace,
        destination: "Ironhack",
        travelMode: "DRIVING"
      }
  
      directionsService.route(
        directionRequest,
        (res, status) => {
          if (status === "OK") {
            directionsDisplay.setDirections(res)
          } else {
            window.alert("Dirección fallada por el motivo" + status)
          }
        }
      )
  
      directionsDisplay.setMap(map)
  
  
    }
  
    placeRestaurants = (restaurants) => {
  
      const markers = []
  
      restaurants.forEach(restaurant => {
        const center = {
          lat: restaurant.location.coordinates[1],
          lng: restaurant.location.coordinates[0]
        }
  
        const marker = new google.maps.Marker({
          position: center,
          map: map,
          title: restaurant.name
        })
        markers.push(marker)
      })
    }
  
    startMap()
    placeRestaurants(window.result) // esta funcion recorre todos los places. Debe aparece en el hbs.
  
  
    // document.getElementById("router").onclick = goToPlace
  
  
    console.log('IronGenerator JS imported successfully!');
  
  }, false);
  