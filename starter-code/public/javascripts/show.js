window.onload = () => {
  const thisPlace = document.getElementById("map")
  let latitude = (thisPlace.attributes[1].nodeValue);
  let longitude = (thisPlace.attributes[2].nodeValue);

  let thisCenter = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude)
  };

  console.log(latitude, longitude, thisCenter);
  const markers = [];

  function startMap() {
    //const ironhackBCN = {
    //  lat: thisCenter.lat,
    //  lng: thisCenter.lng
    //};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: thisCenter
      }
    );
    const myMarker = new google.maps.Marker({
      position: {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
      },
      map: map,
      title: thisPlace.attributes[3].nodeValue
    });
  }
  
  startMap();

};
