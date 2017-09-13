function startMap() {
  var ironhackBCN = {
    lat: 41.3977,
    lng: 2.1904  };
  var map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 15,
      center: ironhackBCN
    }
  );
}

startMap();
