document
  .addEventListener(
    'DOMContentLoaded',
    () =>
      {
        console.log('IronGenerator JS imported successfully!')

        const naples = {lat: 40.8397706, lng: 14.2216924}

        const map = new google.maps.Map(document.getElementById('gmap'), {zoom: 14, center: naples})

        new google.maps.Marker({position: naples, map: map})
        
        //map.data.loadGeoJson('/api/places/5c813df2ec98871b2694b32c') // IF the endpoint was a pure geoJSON emitter we couls use the built-in function
        gMapUpdate(map, "http://localhost:3000/api/places")
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

  $('#actionModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var action = button.data('action') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(action + button)
    modal.find('.modal-body input').val("VALUE")
  })