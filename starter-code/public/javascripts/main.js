window.onload = () => {
  const ironhackMAD = {
    lat: 40.3925087,
    lng: -3.700465

  };

  const markers = []

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackMAD
  });

  let center = {
    lat: undefined,
    lng: undefined
  };
};

