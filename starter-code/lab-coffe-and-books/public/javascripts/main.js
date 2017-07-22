// main.js

function startMap(places) {
    const book = "http://localhost:3000/images/book.png";
    const coffe = "http://localhost:3000/images/coffe.png";
  var ironhackBCN = {
  	lat: 41.3977381, 
  	lng: 2.190471916};
  var map = new google.maps.Map(
    document.getElementById('map'), 
    {
      zoom: 10,
      center: ironhackBCN
    }
  );

  
  places.forEach ((place)=>{
                
              
                
                
              var myMarker = new google.maps.Marker({
                position: {
                    lat: place.location.coordinates[1], 
                    lng: place.location.coordinates[0]
                },
                map: map,
                title: place.name,
                icon: "http://localhost:3000/images/" + place.businesstype + ".png"
                });
  }) 
     
   


}





$.ajax({
  url: "http://localhost:3000/places",
  method: "GET",
  success: function (response) {
      console.log(response.location)
    startMap(response);
  },
  error: function (err) {
    console.log(err)
  },
})

