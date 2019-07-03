document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);


  const ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 5,
      center: ironhackBCN
    }
  );
 
 
 

  document.querySelector("#loadPins").onclick = function () {
  axios
      .get("http://localhost:3000/json")
      .then(JSONPayload => {
          JSONPayload.data.places.forEach(place => {
              const marker = new google.maps.Marker({
                  position: {
                      lng: place.location.coordinates[0],
                      lat: place.location.coordinates[1],
                  },
                  animation: google.maps.Animation.DROP,
                  draggable: true,
                  // icon: './myStar.png',
                  map: map,
                  title: place.name
              });
          })
      })
    }

