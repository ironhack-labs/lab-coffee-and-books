document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 12,
      center: {
        lat: 40.4197351,
        lng: -3.7040427
      }
    }
  );
  
  loadData(map);
  
 /*  geolocateMe()
    .then(center => map.setCenter(center))
    .catch(e => console.log(e)) */

}, false);

