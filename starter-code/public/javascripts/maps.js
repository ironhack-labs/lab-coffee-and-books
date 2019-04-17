  
const myCurrentCoords = {
  lat: 40.4146500,
  lng: -3.7004000
};

let theMap = null;

var elementExists = document.getElementById("map");

if (elementExists != null){
  theMap = new google.maps.Map(
    document.getElementById('map'),
    {
        zoom: 12,
        center: myCurrentCoords
    }
  );
  axios.get('http://localhost:3000/places/findplaces')
  .then(places => {
    console.log(places.data);
    places.data.forEach(element => {
      setMarker(element.lat, element.lng, theMap, element.name);
    });
  })
  .catch(error => {
    console.log(error);
  });
}






function setMarker(lat, lng, theMap, title) {
  new google.maps.Marker({
      position: {
          lat: lat,
          lng: lng
      },
      map: theMap,
      title: title
  });
}

