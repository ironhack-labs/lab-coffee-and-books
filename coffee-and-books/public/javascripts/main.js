window.onload = () => {
  const francisHQ = {
    lat: 40.421610, 
    lng: -3.698050
  };
  
  const markers = []
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: francisHQ
  });

  let center = {
    lat: undefined,
    lng: undefined
  }; 

  const myMarker = new google.maps.Marker({
    position: {
      lat: 40.421610,
      lng: -3.698050
    },
    map: map,
    title: "Francis HQ"
  });

  function placeCoffees(coffees){
    console.log("hello")
    coffees.forEach(function(coffee){
      const center = {
        lat: coffee.location.coordinates[1],
        lng: coffee.location.coordinates[0]
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: coffee.name
      });
      markers.push(pin)
    });
}
};



