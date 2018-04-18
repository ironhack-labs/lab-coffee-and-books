document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
    console.log(window.places);
    const places = window.places;

    const ironhack = {
      lat: 40.392088,
      lng: -3.698473
    };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: ironhack
    });

    places.forEach(place => {
      console.log(place);
      const pin = new google.maps.Marker({
        position: {
          lat: place.location.coordinates[0],
          lng: place.location.coordinates[1]
        },
        map: map,
        title: place.name
      });
    });
  },
  false
);
