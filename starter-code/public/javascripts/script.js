window.chosenLocation = null;



function initMap() {

  lng = document.getElementById('lng').value;
  ltd = document.getElementById('ltd').value;

  var location = { 
    lat: 0,
    lng:0
  };

  

  if(lng === '' && ltd === ''){
    location.lat = 36.51543;
    location.lng = -4.88583;
  }else{
    location.lat = +ltd;
    location.lng = +lng;
  }


  
  


  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
    
  });

  

  var marker = new google.maps.Marker({ position: location, map: map,animation: google.maps.Animation.DROP, });

  //sets and listener so we can move the marker to the chosen coordinates
 
  map.addListener("click", function(e) {
    saveLocations(e.latLng.lng(),e.latLng.lat());
    window.chosenLocation = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
       
    };
      marker.setPosition(chosenLocation);
    
  });
  function saveLocations(lng,ltd){

    lng = document.getElementById('lng').value = lng;
    ltd = document.getElementById('ltd').value = ltd;
  
    } 
  
  
    function getJson(){
      if(lng === '' && ltd === ''){
        axios.get('/json-all')
        .then((markers)=>{
          console.log('hola',markers);
          markers.data.places.forEach(marker => marker.coordinates  && new google.maps.Marker({
            
            position: new google.maps.LatLng({
              lat: +(marker.coordinates.ltd),
              lng: +(marker.coordinates.lng),
            }),
            map,
            title: `Name: ${marker.name} Type: ${marker.type}`,
            
          }));
          markers.push
        })
        .catch(err=>console.log(err))
      }
    
     
    }
  
    getJson();
  
  
}



initMap();
