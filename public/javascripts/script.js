document
  .addEventListener(
    'DOMContentLoaded',
    () =>
      {
        console.log('IronGenerator JS imported successfully!')

        const naples = {lat: 40.8397706, lng: 14.2216924}

        const map = new google.maps.Map(document.getElementById('gmap'), {zoom: 14, center: naples})

        const IAmHere = new google.maps.Marker({position: naples, map: map, title: "I am here"})
        
        const IAmHereInfo = new google.maps.InfoWindow({
          content: "<h5>Full CRUD app in Express.js</h5><p>Hello. This is the core of a CRUD app coded in Express.js</p><p>This code is meant as a DEMO and runs on a locally bind instance of MongoDB.</p><p>The app feature examples of the following technologies:<ul><li>ES2017</li><li>Node.js (v.10+)</li><li>Express.js (v4+)</li><li>GoogleMapsAPI</li><li>Bootstrap (v4+) advanced data flow</li><li>JS Promises</li><li>JS Async/Await</li><li>CSS3 relative positioning</li><li>HTML5</li></ul></p><p>Use for educational purposes only!</p>"
        })

        IAmHere.addListener('click', function() {
          IAmHereInfo.open(map, IAmHere);
        })
        google.maps.event.addListenerOnce(map, 'tilesloaded', () => {IAmHereInfo.open(map, IAmHere)})

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
          const coords = place.location.coordinates;
          const latLng = new google.maps.LatLng(coords[1],coords[0])
          const marker = new google.maps.Marker({position: latLng, map: map, title: place.name})
          google.maps.event.addListener(marker, 'click', () => {new google.maps.InfoWindow({content: place.name}).open(map,marker)})
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