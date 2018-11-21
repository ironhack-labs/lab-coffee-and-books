window.onload = function(){
  startMap();

  
}
// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);






// maps.addListener("click", function (e) {
//   window.chosenLocation = {
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng()
//   }
//   marker.setPosition(chosenLocation);
//   console.log(chosenLocation)
// })

function startMap() {
    const ironhackBCN = {
        lat: 42.4592723,
        lng: -6.0946061};
    const maps = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 12,
        center: ironhackBCN
      }
    );

    var marker = new google.maps.Marker({position: ironhackBCN, map: maps});

    // const maps = document.getElementById('map')
    // console.log(maps)
    maps.addListener("click", function (e) {
    window.chosenLocation = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
    }
    marker.setPosition(chosenLocation);
    console.log(chosenLocation)


    console.log(document.getElementById('latpos').value )
    document.getElementById('latpos').value = chosenLocation.lat;
    document.getElementById('lngpos').value = chosenLocation.lng;
  })
  }