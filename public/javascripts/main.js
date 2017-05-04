$(document).ready(() => {
  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.090471916,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: ironhackBCN,
  });

  let center = {
    lat: undefined,
    lng: undefined,
  };


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      map.setCenter(center);
      getShop();
    }, () => {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  function getShop() {
    $.ajax({
      url: 'http://localhost:3000/api',
      method: 'GET',
      success: placeShops,
      error(error) {
        console.log('error');
      },
    });
  }

  function placeShops(shops) {
    shops.forEach((shop) => {
      const center = {
        lat: shop.location.coordinates[1],
        lng: shop.location.coordinates[0],
      };
      const pin = new google.maps.Marker({
        position: center,
        map,
        title: shop.name,
      });
      markers.push(pin);
    });
  }
});
