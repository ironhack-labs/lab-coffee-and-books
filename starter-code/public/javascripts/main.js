
function startMap() {
  const ironhackBCN = {
    lat: Number(document.querySelector("input[name=latitude]").value),
    lng: Number(document.querySelector("input[name=longitude]").value)
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: ironhackBCN
  });
  const myMarker = new google.maps.Marker({
    position: {
      lat: Number(document.querySelector("input[name=latitude]").value),
      lng: Number(document.querySelector("input[name=longitude]").value)
    },
    
    map: map,
    title: "I'm here"
  });
}

startMap();
