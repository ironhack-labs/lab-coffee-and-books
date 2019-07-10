document.addEventListener('DOMContentLoaded', () => {
  console.log('IronGenerator JS imported successfully!');

}, false);

const markers = [];

const ironhackSP = {
  lat: -23.5617375,
  lng: -46.6601331
};

const map = new google.maps.Map(
  document.getElementById('map'),
  {
    zoom: 10,
    center: ironhackSP
  }
);

const getShops = () => {
  axios.get('/api')
    .then((response) => {
      placeShops(response.data.shops);
    })
    .catch((error) => {
      console.log(error);
    })
}

const placeShops = (shops) => {
  shops.forEach(function (shop) {
    const center = {
      lat: shop.location.coordinates[1],
      lng: shop.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: shop.name
    });
    markers.push(pin);
  });
}

getShops();