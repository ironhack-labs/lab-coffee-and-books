document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

function initMap() {
  const naples = {lat: 40.8397706, lng: 14.2216924};
  const map = new google.maps.Map(
  document.getElementById('gmap'), {zoom: 14, center: naples});
  const marker = new google.maps.Marker({position: naples, map: map});
}