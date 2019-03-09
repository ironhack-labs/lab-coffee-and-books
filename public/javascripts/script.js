document
  .addEventListener(
    'DOMContentLoaded',
    async () =>
      {
        console.log('IronGenerator JS imported successfully!')

        const naples = {lat: 40.8397706, lng: 14.2216924}

        const map = new google.maps.Map(document.getElementById('gmap'), {zoom: 14, center: naples})

        new google.maps.Marker({position: naples, map: map})
        
        const serverResponse = await fetch("http://localhost:3000/api/places")
        const jsonData = await serverResponse.json()
        jsonData
          .forEach(
            place =>
            {
              var coords = place.location.coordinates;
              var latLng = new google.maps.LatLng(coords[1],coords[0])
              new google.maps.Marker({position: latLng, map: map})
            }
          )
      },
    false
  )

  async function gMapUpdate(map, source){
    const serverResponse = await fetch(source)
    const jsonData = await serverResponse.json()
    jsonData
      .forEach(
        place =>
        {
          var coords = place.location.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0])
          new google.maps.Marker({position: latLng, map: map})
        }
      )

  }