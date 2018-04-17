window.onload = () => {
  const madrid = {
    lat: 40.4237302,
    lng: -3.6735737
  };
  
  const markers = []
  
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: madrid
  });

  const center = {
    lat: undefined,
    lng: undefined
  }; 
};
