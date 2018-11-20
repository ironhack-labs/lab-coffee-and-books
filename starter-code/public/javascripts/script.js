window.chosenLocation = null;



function initMap() {

  lng = document.getElementById('lng').value;
  ltd = document.getElementById('ltd').value;

  

  if(lng === '' && ltd === ''){
    lng = -4.88583;
    ltd = 36.51543;
  }


  var location = { 
    lat: +ltd, 
    lng: +lng 
  };



  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location
  });

  var marker = new google.maps.Marker({ position: location, map: map });

  //sets and listener so we can move the marker to the chosen coordinates
 
  map.addListener("click", function(e) {
    saveLocations(e.latLng.lng(),e.latLng.lat());
    window.chosenLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
       
    };
      marker.setPosition(chosenLocation);
    
  });

  
}

function saveLocations(lng,ltd){

  lng = document.getElementById('lng').value = lng;
  ltd = document.getElementById('ltd').value = ltd;

  } 


  function getJson(){
    axios.get('/json-all')
    .then((response)=>{
        console.log(response.data);
    })
    .catch()
  }

 

getJson();
initMap();
