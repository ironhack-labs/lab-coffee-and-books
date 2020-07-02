  let myMap

  window.onload = () => {
      const lasPalmasGC = {
          lat: 28.134588,
          lng: -15.434768
      };

      myMap = new google.maps.Map(document.getElementById('myMap'), {
          zoom: 16,
          center: lasPalmasGC,
          styles: mapStyles.silver
      });

      getCoffees()
  }

  function getCoffees() {
      axios.get("/places/api")
          .then(response => {
              console.log("LA RESPUESTA DEL SERVIDOR ES", response)
              placePlaces(response.data.allPlaces)
          })
          .catch(error => console.log(error))
  }

  function placePlaces(places) {
      places.forEach(place => {
          const center = {
              lat: place.location.coordinates.lat,
              lng: place.location.coordinates.lng
          }
          const iconURL = place.type === "coffee shop" ? "images/markers/coffee.png" : "images/markers/book.png"
            new google.maps.Marker({
                position: center,
                map: myMap,
                title: place.name,
                icon: {
                    url: iconURL,
                    scaledSize: new google.maps.Size(40, 40) 
                }
            })
      })

      myMap.setCenter({
          lat: places[1].location.coordinates.lat,
          lng: places[1].location.coordinates.lng
      })
  }