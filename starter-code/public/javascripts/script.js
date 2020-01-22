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
  const IronhackBCNMarker = new google.maps.Marker({
    position: {
      lat: ironhackBCN.lat,
      lng: ironhackBCN.lng
    },
    map: map,
    title: "Barcelona Campus"
  });
}



startMap();