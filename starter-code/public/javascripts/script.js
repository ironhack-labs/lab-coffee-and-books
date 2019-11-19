let theMap;
let markers = [];
let madrid = { lat: 40.416928, lng: -3.703492};


window.onload = function() {
  startMainMap(theMap);
  startDetailMap(theMap);
};
  


function startMainMap() {
  if(document.getElementById("map")){
  theMap = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: madrid
  }
  );

  showPlaces(theMap)
  // locateMe(theMap)
  // infoWindowDisplay(theMap);
  // addMarkerWhereYouHaveClicked(theMap);
  // markersWithEvents(theMap);
}else return false
}

function startDetailMap() {
  if(document.getElementById("map-detail")){
  
  let lat= Number(document.getElementById("lat").value)
  let lng= Number(document.getElementById("lng").value)
  let name= document.getElementById("name").value
  let type= document.getElementById("type").value
  console.log(lat,lng,name,type)

  if(document.getElementById("map-detail")){
  theMap = new google.maps.Map(document.getElementById("map-detail"), {
    zoom: 16,
    center: {lat: lat, lng: lng}
  });
  showPlace(theMap, lat, lng, name)
}
}else return false
}


function locateMe(theMap) {
  if (navigator.geolocation) {
    // Get current position
    // The permissions dialog will pop up
    navigator.geolocation.getCurrentPosition(
      function(position) {
        // Create an object to match Google's Lat-Lng object format
        const currentCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        new google.maps.Marker({
          position: currentCoords,
          map: theMap,
          title: "I am here"
        });

        theMap.panTo(currentCoords);

        // User granted permission
        // Center the map in the position we got
      },
      function() {
        // If something goes wrong
        console.log("Error in the geolocation service.");
      }
    );
  } else {
    // Browser says: Nah! I do not support this.
    console.log("Browser does not support geolocation.");
  }
}

// function interactWithTheMap(theMap) {
//   let asideDOMEl = document.querySelector("aside");
//   let zurdo = false;

//   asideDOMEl.innerHTML = `<p>Zurdo ${zurdo}</p><input type='range' min=1 max=15 id='zoom-level' placeholder='zoom level' /><button id="move-left">Move left</button><button id="move-right">Move right</button>`;
//   asideDOMEl.style.left = 0;

//   document.querySelector("#move-left").onclick = function() {
//     theMap.panBy(500 * (zurdo ? -1 : 1), 0);
//   };

//   document.querySelector("#move-right").onclick = function() {
//     theMap.panBy(-500 * (zurdo ? -1 : 1), 0);
//   };

//   document.querySelector("#zoom-level").onchange = function() {
//     theMap.setZoom(+this.value);
//   };
// }

// function infoWindowDisplay(theMap) {
//   var contentString =
//     '<div id="content">' +
//     '<div id="siteNotice">' +
//     "</div>" +
//     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
//     '<div id="bodyContent">' +
//     '<p>Test1</p>'+
//     "</div>" +
//     "</div>";

//   var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });


//   marker.addListener("click", function() {
//     infowindow.open(map, marker);
//   });
// }

// function addMarkerWhereYouHaveClicked(theMap) {
//   theMap.addListener("click", function(e) {
//     markers.push(
//       new google.maps.Marker({
//         position: e.latLng,
//         // position: {
//         //   lat: e.latLng.lat(),
//         //   lng: e.latLng.lng()
//         // },
//         map: theMap,
//         draggable: true,
//         icon: "images/doge.png",
//         title: "Marker where you have clicked"
//       })
//     );

//     if (markers.length === 2) {
//       drawRoute(
//         theMap,
//         {
//           latitude: markers[0].position.lat(),
//           longitude: markers[0].position.lng()
//         },
//         {
//           latitude: markers[1].position.lat(),
//           longitude: markers[1].position.lng()
//         }
//       );
//     }
//   });
// }

// function markersWithEvents(theMap) {
//   function showBootcampData() {
//     const asideDOMEl = document.querySelector("aside");

//     asideDOMEl.innerHTML = `
//       <button id='close-button'>X</button>
//       <h1>Place</h1>
//       <p>${ironhackBCNData.name}</p>
//       <p>Students: ${ironhackBCNData.students}</p>
//       <p>Total bootcamps: ${ironhackBCNData.bootcamps}</p>
//     `;

//     asideDOMEl.style.left = 0;

//     document.querySelector("#close-button").onclick = function() {
//       document.querySelector("aside").style.left = "-30vw";
//     };
//   }

//   let marker = new google.maps.Marker({
//     position: {
//       lat: 41.3977381,
//       lng: 2.190471916
//     },
//     map: theMap,
//     title: "Marker with events"
//   });

//   marker.addListener("click", showBootcampData);
// }

// function displayMarkersRow(theMap) {
//   Array(360)
//     .fill()
//     .forEach((_, idx) => {
//       new google.maps.Marker({
//         position: {
//           lat: 41.3977381 + Math.cos((idx * 2 * Math.PI) / 180),
//           lng: 2.190471916 + idx / 20
//         },
//         map: theMap,
//         title: "Testing a line of markers, marker #" + idx,
//         draggable: true
//       });
//     });
// }

function showPlaces(theMap) {
  axios.get("http://localhost:3000/allPlaces").then(allPlaces => {
    var iconBase ='../../images/';
    allPlaces.data.forEach(place => {
      setTimeout(() => {
        new google.maps.Marker({
          position: { lat: place.pos.lat, lng: place.pos.lng },
          map: theMap,
          title: place.name,
          animation: google.maps.Animation.DROP,
          draggable: false,
          icon: iconBase+"icon_coffee.png"
        });
      }, randomFloat(0.25, 1.25) * 1000);
      
    });

  });
}


function showPlace(theMap, lat, lng, name, type) {
  var iconBase ='../../images/';
  let latDomEl = document.getElementById("lat");
  let lngDomEl = document.getElementById("lng");
  
        let marker = new google.maps.Marker({
          position: {lat: lat, lng:lng},
          map: theMap,
          title: name,
          animation: google.maps.Animation.DROP,
          draggable: true,
          icon: iconBase+"icon_coffee.png"
        }
        );

        marker.addListener("dragend", function(){
          latDomEl.setAttribute("value",`${marker.getPosition().lat()}`) ;
          lngDomEl.setAttribute("value",`${marker.getPosition().lng()}`) ;
        })

}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

startMainMap();
