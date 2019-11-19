let theMap;
let markers = [];
let madrid = { lat: 40.416928, lng: -3.703492 };


window.onload = function () {
  startMainMap(theMap);
  startDetailMap(theMap);
};



function startMainMap() {
  if (document.getElementById("map")) {
    theMap = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: madrid
    }
    );

    showPlaces(theMap)

  } else return false
}

function startDetailMap() {
  if (document.getElementById("map-detail")) {

    let lat = Number(document.getElementById("lat").value)
    let lng = Number(document.getElementById("lng").value)
    let name = document.getElementById("name").value
    let type = document.getElementById("type").value
    console.log(lat, lng, name, type)

    if (document.getElementById("map-detail")) {
      theMap = new google.maps.Map(document.getElementById("map-detail"), {
        zoom: 16,
        center: { lat: lat, lng: lng }
      });

      showPlace(theMap, lat, lng, name)
    }
  } else return false
}


function showPlaces(theMap) {
  axios.get("http://localhost:3000/allPlaces").then(allPlaces => {
    var iconBase = '../../images/';
    allPlaces.data.forEach(place => {
      setTimeout(() => {
        new google.maps.Marker({
          position: { lat: place.pos.lat, lng: place.pos.lng },
          map: theMap,
          title: place.name,
          animation: google.maps.Animation.DROP,
          draggable: false,
          icon: iconBase + "icon_coffee.png"
        });
      }, randomFloat(0.25, 1.25) * 1000);

    });

  });
}


function showPlace(theMap, lat, lng, name, type) {
  var iconBase = '../../images/';
  let latDomEl = document.getElementById("lat");
  let lngDomEl = document.getElementById("lng");

  let marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: theMap,
    title: name,
    animation: google.maps.Animation.DROP,
    draggable: true,
    icon: iconBase + "icon_coffee.png"
  }
  );

  marker.addListener("dragend", function () {
    latDomEl.setAttribute("value", `${marker.getPosition().lat()}`);
    lngDomEl.setAttribute("value", `${marker.getPosition().lng()}`);
  })

}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

startMainMap();
