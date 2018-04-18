document.addEventListener(
  "DOMContentLoaded",
  () => {
    function startMap() {
      const YorikBook = {
        lat: 40.406296,
        lng: -3.699162
      };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: YorikBook
      });
      const myMarker = new google.maps.Marker({
        position: {
          lat: 40.406296,
          lng: -3.699162
        },
        map: map,
        title: "I'm here"
      });
    }

    startMap();
  },
  false
);
