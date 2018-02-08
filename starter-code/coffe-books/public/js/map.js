function startMap() {

  // Creo un mapa, lo centro en BCN y coloco un marcador en BCN
  const ironhackMAD = {
      lat: 40.3923463,
      lng: -3.6984743999999994
  };
  const map = new google.maps.Map(
      document.getElementById('map'),
      {
          zoom: 15,
          center: ironhackMAD
      }
  );
}