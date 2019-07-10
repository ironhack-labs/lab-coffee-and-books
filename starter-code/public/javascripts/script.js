document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

window.onload = () => {
  const markers = [];

  const ironhackSP = {
    lat: -23.5617375,
    lng: -46.6601331
  };

  const map = new google.maps.Map( document.getElementById('map'),
    {
      zoom: 1,
      center: ironhackSP
    }
  );

  const getPlaces = () => {
    axios.get("/api/places")
     .then(response => {
      //  console.log(response)
       placePlaces(response.data.place);
     })
     .catch(error => {
       console.log(error);
     })
   }

   const placePlaces = places => {
    places.forEach(place => {
      // console.log(book.location);
      if (place.location) {
        const center = {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0]
        };
        console.log(center)
        const pin = new google.maps.Marker({
          position: center,
          map: map,
          title: place.name
        });

        markers.push(pin);

      }
    });
  }

  getPlaces(); 
}