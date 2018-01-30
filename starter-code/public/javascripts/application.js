const mapsAPI = new APIMaps();
const handlerAPI = new APIHandler("http://localhost:3000");

function startMap() {
  mapsAPI.startMap();
}

$(document).ready(() => {
  $('#form-new-bookstore').on('submit', (event) => {
    event.preventDefault();
    var $inputs = $('#form-new-bookstore :input');
    var values = {};
    $inputs.each(function () {
      values[this.name] = $(this).val();
    });
    handlerAPI.createOneRegister(values);
  });

  $('.show-bookstore').click((event) => {
    var td = event.target.parentElement;
    let lat = td.getAttribute("lat");
    let lng = td.getAttribute("lng");
    mapsAPI.myMarker(parseFloat(lat),parseFloat(lng));

  });
});




















// function startMap() {
//   var map;
//   var currentMarker;
//   var ironhackBCN = {
//     lat: 41.3977381,
//     lng: 2.190471916
//   };
//   map = new google.maps.Map(
//     document.getElementById('map'), {
//       zoom: 15,
//       center: ironhackBCN
//     }
//   );
//   currentMarker= myMarker(map);
//   getPosition(map, currentMarker);
// }

// function myMarker(map) {
//   return new google.maps.Marker({
//     position: {
//       lat: 41.3977381,
//       lng: 2.190471916
//     },
//     map: map,
//     title: "I'm here"
//   });
// };

// function getPosition(map, currentMarker) {
//   google.maps.event.addListener(map, "click", function (e) {
//     currentMarker.setMap(null);
//     currentMarker = new google.maps.Marker({
//       position: e.latLng,
//       map: map,
//       title: "I'm here"
//     });
//     $('#lat').val(e.latLng.lat);
//     $('#lng').val(e.latLng.lng);
//   });
// }