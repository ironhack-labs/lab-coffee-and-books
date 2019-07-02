// ========================MAPS===========================


function startMap() {
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
}

startMap();
const myMarker = new google.maps.Marker({
  position: {
  	lat: 41.3977381,
  	lng: 2.190471916
  },
  map: map,
  title: "I'm here"
});
// const Places= require("models/place.js")
// Places.forEach(places => {
//   const myMarker = new google.maps.Marker({
//     position: {
//       lat: places.lat,
//       lng: places.lng
//     },
//     title: places.name
//   });

  // myMarker.addListener("click", function(e) {
  //   alert(airport.name);
  //     console.log(e)

  //   theMap.setZoom(6);
  //   theMap.panTo(myMarker.getPosition());
  // });
// });
// console.log(`test in maps.js`)
// const theMap = new google.maps.Map(document.getElementById("map"), {
//    zoom: 4,
//   center: {
//     lat: cities.madrid.lat,
//     lng: cities.madrid.lng
//   }
// });
// module.exports = theMap;