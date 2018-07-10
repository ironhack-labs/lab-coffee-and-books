document.addEventListener("DOMContentLoaded", () => {
    const center = {
      lat: 40.4167,
      lng: -3.70325
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: center
    });

    if (window.places) {
      const bounds = new google.maps.LatLngBounds();

      window.places.forEach(place => {
        const icon = {
          scaledSize: new google.maps.Size(40, 40), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(20, 40) // anchor
        };
        if (place.kind === "Café") {
          icon.url = "/images/marker_blue.png";
        } else {
          icon.url = "/images/marker_orange.png";
        }

        const marker = new google.maps.Marker({
          position: {
            lat: place.location.coordinates[0],
            lng: place.location.coordinates[1]
          },
          map: map,
          icon: icon,
          title: `${place.name} (${place.kind})`
        });

        bounds.extend(marker.position);
      });

      map.fitBounds(bounds);
    }
  }, false
);
