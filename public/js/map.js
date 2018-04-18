document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  startMap = () => {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {lat: 0, lng: 0}
      });
     

      
      // Try to get a geolocation object from the web browser
      getPlaces() 
       
    }
    
  
  getPlaces = () => {
    axios.get("/markers")
    .then( res => {
      console.log(res.data)
      placePlaces(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
  let markers = [];
  placePlaces = places => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: {lat: 41.39780037511012, lng: 2.1905911449111493}
    });
    const bounds = new google.maps.LatLngBounds();
    const book = {url: '/images/book.png',
    size: new google.maps.Size(50, 50)};
    const coffee = {url: '/images/coffee.png',
    size: new google.maps.Size(50, 50)};

    places.forEach((place)=>{

      const image = place.type === "bookstore" ? book : coffee
      const center = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      bounds.extend(center);
      map.fitBounds(bounds);
      const myMarker = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name,
        icon: image,
        animation: google.maps.Animation.DROP
      });
      markers.push(myMarker)
      //Aquí una idea que se podría meter un listener y hacer update (quizas sería posible con un input hidden)
      myMarker.setDraggable(true);
      setInterval(() => { myMarker.setAnimation(google.maps.Animation.BOUNCE)}, 1000);
    });
}


  startMap();

  
}, false);
