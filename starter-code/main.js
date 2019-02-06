function startMap() {
  const ironhackBCN = {
  	lat: 41.3977381,
  	lng: 2.190471916};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 5,
      center: ironhackBCN
    }
  );
}

startMap();