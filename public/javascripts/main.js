var pariserPlatz ={ 
    name: "East of Starbucks",
    location: {
        lat: 52.5167493, 
        lng: 13.3807915}
};

const places = [pariserPlatz];

function getData() {

    $.ajax({
        url: "http://localhost:4000/api",
        method: "GET",
        success: function(response) {
            console.log(response)
            startMap(response);
        },
        error: function(error){
            console.log(error)
        }
    })
}

function startMap(info) {
    
    var map = new google.maps.Map(
      document.getElementById('map'), 
      {
        zoom: 15,
        center: pariserPlatz.location
      }
    );

    info.map((place) => {
        place.location.lat = parseFloat(place.location.lat)
        place.location.lng = parseFloat(place.location.lng)
        var myMarker = new google.maps.Marker({
            position: place.location,
            title: place.name
    });

    myMarker.setMap(map);
    })

  }


getData();


