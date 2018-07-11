document.addEventListener('DOMContentLoaded', () => {
  const coffeeShop = {
    lat: 
    lng: 
  };
  const map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: coffeeShop
    }
  );

  window.coffee.forEach( coffee => {
    new google.maps.Marker({
      position: {
        lat: coffee.location.coordinates[0],
        lng: coffee.location.coordinates[1]
      },
      map: map,
      title: `${coffee.name} - ${coffee.description}`
    });
  //});
  //console.log('IronGenerator JS imported successfully!');

}, false);
