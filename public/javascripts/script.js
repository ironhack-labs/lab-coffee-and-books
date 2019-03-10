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
          content: "<h5>Full CRUD app in Express.js</h5><p>Hello. This is the core of a CRUD app coded in Express.js</p><p>This code is meant as a DEMO and runs on a locally bind instance of MongoDB.</p><p>The app feature examples of the following technologies:<ul><li>ES2017</li><li>Node.js (v.10+)</li><li>Express.js (v4+)</li><li>GoogleMapsAPI</li><li>Bootstrap (v4+) advanced data flow</li><li>JQuery (v3+) advanced data flow</li><li>JS Promises</li><li>JS Async/Await</li><li>CSS3 fluid layout</li><li>CSS3 breakpoints</li><li>CSS3 relative positioning</li><li>HTML5</li></ul></p><p>Use for educational purposes only!</p>"
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
            .attr('onclick', `deleteDocuemnt(${documentURI})`)
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

      modalWindow.find("form")[0].reset()

      switch (actionToDo)
      {
        case "create":
          modalWindow
            .find("#title-modifyModal")
            .text("Create a new place")
          modalWindow
            .find('#btn-submit-modifyModal')
            .removeClass()
            .addClass("btn btn-success")
            .prop('disabled', false)
            .attr('onclick', `createDocuemnt(${documentURI})`)
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
            .attr('onclick', `updateDocuemnt(${documentURI})`)
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
  const modalForm = modalWindow.find("form")
  const modalFormInputs = modalForm.find("input")
  const modalFormSelects = modalForm.find("select")
  const modalActionButton = modalWindow.find('#modal-submit')
  const modalCancelButton = modalWindow.find('#modal-dismiss')
  const modalTitle = modalWindow.find('#titleActionModal')
  const modaPlaceName = modalWindow.find('#place-name')
  const modalPlaceType = modalWindow.find('#place-type')
  const modalPlaceLng = modalWindow.find('#place-lng')
  const modalPlaceLat = modalWindow.find('#place-lat')

  fetch(dataSourceURI)
    .then(serverResponse => serverResponse.json())
    .then(jsonData =>
      {
        // destructuring with defaults in case async code fails
        const errorMsg = "There was a problem retriving the "
        const {
          name = errorMsg+"name",
          type = errorMsg+"type",
          location : {coordinates : [lng = errorMsg+"longitude", lat = errorMsg+"latitude"]}
        } = jsonData

        modaPlaceName
          .val(name)
        modalPlaceType
          .val(type)
        modalPlaceLng
          .val(lng)
        modalPlaceLat
          .val(lat)
        modalActionButton
          .removeClass("disabled")
          .prop('disabled', false)
      }
      )
      .catch(err =>
      {
        modalTitle
          .text("There was an error retriving data. Please cancel and retry.")
          modaPlaceName
            .val("")
          modalPlaceType
            .val("")
          modalPlaceLng
            .val("")
          modalPlaceLat
            .val("")
          modalActionButton
            .addClass("btn-primary d-none")
            .text("ERROR! Please cancel and retry")
          modalCancelButton.text("back")
          console.log(err)
        })
}

/*
    $("#contact_form").on("submit", function(e) {
      var postData = $(this).serializeArray();
      var formURL = $(this).attr("action");
      $.ajax({
          url: formURL,
          type: "POST",
          data: postData,
          success: function(data, textStatus, jqXHR) {
              $('#contact_dialog .modal-header .modal-title').html("Result");
              $('#contact_dialog .modal-body').html(data);
              $("#submitForm").remove();
          },
          error: function(jqXHR, status, error) {
              console.log(status + ": " + error);
          }
      });
      e.preventDefault();
  });
   
  $("#submitForm").on('click', function() {
      $("#contact_form").submit();
  });

(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "test" );
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

		}, false);

	});

})();


$.ajax({
  type: "POST",
  url: "serverUrl",
  data: formData,
  dataType: "json",
  contentType : "application/json"
})
*/