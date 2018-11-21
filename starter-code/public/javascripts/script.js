document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

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
  position:{
    lat: 41.3977381,
    lng: 2.190471916
  },
  map: map,
  title: 'I am here'
});