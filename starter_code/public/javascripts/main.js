window.onload = () => {
  const ironhackBCN = {
    lat: 41.3977381,
    lng: 2.190471916
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: ironhackBCN
  });

  let center = {
    lat: undefined,
    lng: undefined
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(center);
      getPlace();
    });
  } else {
    console.log("Browser does not support geolocation.");
  }
};
