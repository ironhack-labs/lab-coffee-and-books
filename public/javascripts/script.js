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
          content: "<h5>Concept  DEMO of full CRUD Express app</h5><p>Hello. This is the core of a CRUD app coded in Express.js</p><p>This code is meant as a DEMO</p><p> It runs on a dev-only locally bind instance of MongoDB</p><p>The app feature examples of the following technologies:<ul><li>ES2017</li><li>Node.js (v.10+)</li><li>Express.js (v4+)</li><li>GoogleMapsAPI</li><li>Bootstrap (v4+) utilities</li><li>JQuery (v3+) smart selectors</li><li>JS Promises</li><li>JS Async/Await</li><li>CSS3 fluid layout</li><li>CSS3 relative positioning</li><li>HTML5</li></ul></p><p>Use for educational purposes only!</p>"
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


async function
  gMapUpdate(map, source)
{
  let jsonData
  try {
    const serverResponse = await fetch(source)
    jsonData = await serverResponse.json()
  } catch {
    console.error(error)
  }
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

$('#listModal')
  .on('show.bs.modal',
    function (event)
    {
      const modalWindow = $(this)

      const originButton = $(event.relatedTarget) // Button that triggered the modal
      const mongoId = originButton.data('mongo-id') || ""
      const documentURI = "http://localhost:3000/api/places/"+mongoId

      const actionToDo = originButton.data('action') || "There was a problem generating the action" // gat action from html attribute

      fillModalFields(modalWindow, documentURI)

      switch (actionToDo)
      {
        case "info":
          modalWindow
            .find("#title-listModal")
            .text("Info about this place")
          modalWindow
            .find('#btn-delete-listModal')
            .removeClass()
            .addClass("btn btn-danger disabled d-none")
            .prop('disabled', true)
            .attr('onclick', "")
            .text("No action during info display")
          break
        case "delete":
          modalWindow
          .find("#title-listModal")
          .text("Delete this place")
          modalWindow
            .find('#btn-delete-listModal')
            .removeClass()
            .addClass("btn btn-danger")
            .prop('disabled', false)
            .attr('onclick', `deleteDocuemnt("${documentURI}")`)
            .text("delete")
          break
        default:
          modalWindow
            .find("#title-listModal")
            .text("There was an unknown error. Please reload the page.")
          modalWindow
            .find('#btn-delete-listModal')
            .removeClass()
            .addClass("btn btn-danger disabled")
            .prop('disabled', true)
            .text("ERROR! Please cancel and retry")
          break
      }
    }
  )


$('#modifyModal')
  .on('show.bs.modal',
    function (event)
    {
      const modalWindow = $(this)

      const originButton = $(event.relatedTarget) // Button that triggered the modal
      const mongoId = originButton.data('mongo-id') || ""
      const documentURI = "http://localhost:3000/api/places/"+mongoId
      
      const actionToDo = originButton.data('action') || "There was a problem generating the action" // gat action from html attribute

      const form = modalWindow.find("form")
      
      switch (actionToDo)
      {
        case "create":
          form[0].reset()
          modalWindow
            .find("#title-modifyModal")
            .text("Create a new place")
          modalWindow
            .find('#btn-submit-modifyModal')
            .removeClass()
            .addClass("btn btn-success")
            .prop('disabled', false)
            .attr('onclick', `createDocuemnt("${documentURI}")`)
            .text("create")
          break
        case "edit":
          fillModalFields(modalWindow, documentURI)
          modalWindow
            .find("#title-modifyModal")
            .text("Edit this place")
          modalWindow
            .find('#btn-submit-modifyModal')
            .removeClass()
            .addClass("btn btn-warning")
            .prop('disabled', false)
            .attr('onclick', `updateDocuemnt("${documentURI}")`)
            .text("update")
          break
        default:
          modalWindow
            .find("#title-modifyModal")
            .text("There was an unknown error. Please reload the page.")
          modalWindow
            .find('#btn-submit-modifyModal')
            .removeClass()
            .addClass("btn btn-danger disabled")
            .prop('disabled', true)
            .text("ERROR! Please cancel and retry")
          break
      }
    }
  )


function
  fillModalFields(modalWindow, dataSourceURI)
{
  const modalPlaceName = modalWindow.find("[id|='place-name']")
  const modalPlaceType = modalWindow.find("[id|='place-type']")
  const modalPlaceLng = modalWindow.find("[id|='place-lng']")
  const modalPlaceLat = modalWindow.find("[id|='place-lat']")

  fetch(dataSourceURI)
    .then(serverResponse => serverResponse.json())
    .then(jsonData =>
      {
        // destructuring with defaults in case async code fails
        const errorMsg = "There was a problem retriving the "
        const {
          name = errorMsg+"name",
          type = errorMsg+"type",
          location : {coordinates : [lat = errorMsg+"latitude", lng = errorMsg+"longitude"]}
        } = jsonData

        modalPlaceName
          .val(name)
        modalPlaceType
          .val(type)
        modalPlaceLng
          .val(lng)
        modalPlaceLat
          .val(lat)
      }
      )
      .catch(err =>
      {
          modalPlaceName
            .val("Name could not be retrived")
          modalPlaceType
            .val("Type could not be retrived")
          modalPlaceLng
            .val("Longitude could not be retrived")
          modalPlaceLat
            .val("Latitude could not be retrived")
          console.log(err)
        })
}


function
  deleteDocuemnt(documentURI)
{
  fetch(documentURI,
    {
      method: 'DELETE',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }
  )
  window.location.reload(true)
}


function
  createDocuemnt(documentURI)
{
  const form = $("#modifyModal form")
  const jsonName = form.find("[id|='place-name']").val()
  const jsonType = form.find("[id|='place-type']").val()
  const jsonLng = form.find("[id|='place-lng']").val()
  const jsonLat = form.find("[id|='place-lat']").val()

  const jsonData =
    JSON.stringify(
      {
        name : jsonName,
        type : jsonType,
        location :
        {
          type: "Point",
          coordinates : [jsonLng, jsonLat]
        },
        timestamp : 0
      }
    )

  fetch(documentURI,
    {
      method: 'POST',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: jsonData
    }
  )
  window.location.reload(true)
}


function
  updateDocuemnt(documentURI)
{
  const form = $("#modifyModal form")
  const jsonName = form.find("[id|='place-name']").val()
  const jsonType = form.find("[id|='place-type']").val()
  const jsonLng = form.find("[id|='place-lng']").val()
  const jsonLat = form.find("[id|='place-lat']").val()

  const jsonData =
    JSON.stringify(
      {
        name : jsonName,
        type : jsonType,
        location :
        {
          type: "Point",
          coordinates : [jsonLng, jsonLat]
        },
        timestamp : 0
      }
    )

  fetch(documentURI,
    {
      method: 'PUT',
      headers:
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: jsonData
    }
  )
  window.location.reload(true)
}
