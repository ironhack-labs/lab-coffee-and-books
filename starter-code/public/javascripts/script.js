document.addEventListener(
  "DOMContentLoaded",
  () => {
    const places = window.places;
    function startMap() {
      const YorikBook = {
        lat: 40.406296,
        lng: -3.699162
      };
     
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: YorikBook
      });
      places.forEach(place => {
        console.log(place);
        const myMarker = new google.maps.Marker({
          position: {
            lat: place.location.coordinates[0],
            lng: place.location.coordinates[1]
          },
          map: map,
          title: place.name
        });
      })
    }

    startMap();
  },
  false
);
