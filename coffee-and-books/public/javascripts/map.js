document.addEventListener("DOMContentLoaded", () => {
  startMap();
});

function startMap() {
  const mateusHome = {
    lat: -15.8017338,
    lng: -47.9288794
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: mateusHome
  });

  const marker = new google.maps.Marker({
    position: {
      lat: -15.8017338,
      lng: -47.9288794
    },
    map: map,
    title: "House of the Lords"
  });
}
