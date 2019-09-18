function startMap() {
  const latitudeInput = document.getElementById("lat");
  const longitudeInput = document.getElementById("lng");

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {lat: +latitudeInput.textContent, lng: +longitudeInput.textContent}
  });

  let marker = new google.maps.Marker({
    position: { lat: +latitudeInput.textContent, lng: +longitudeInput.textContent },
    map: map,
    title: document.getElementById('title').textContent
  });
}

startMap();
