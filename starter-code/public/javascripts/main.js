window.onload = () => {
  const micasa = {
    lat: 40.4110018,
    lng: -3.7070343
  };
  
  const markers = []
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: micasa
  });

  let center = {
    lat: undefined,
    lng: undefined
  }; 
};
