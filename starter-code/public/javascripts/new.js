console.log("new::ready");

document.addEventListener("DOMContentLoaded", function() {
  const geocoder = new google.maps.Geocoder();
  var sol = {
    lat: 40.4170441,
    lng: -3.7033601
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

  document.getElementById('address-request').addEventListener('click', (e)=>{
    let address = document.getElementById('address').value;

    geocoder.geocode({address}, (results, status)=>{
      if(status == 'OK'){
        console.log(results);
      }else{
        console.log('All yout base belong to us');
      }
    })
  });
});
