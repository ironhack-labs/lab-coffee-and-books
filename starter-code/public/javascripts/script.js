document.addEventListener('DOMContentLoaded', () => {
  function startMap() {
    const felicidad = {
      lat: 40.433510,
      lng: -3.698463};

    const markers =[] 

    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: felicidad
      } );
      const center = {
        lat: undefined,
        lng: undefined
      }; 
  }

  function getBookstore() {
    axios.get("http://localhost:3000/api")
    .then( response => {
      placeBookstore(response.data.restaurants)
    })
    .catch(error => {
      next(error)
    })
  }
  
  startMap();
  
  console.log('IronGenerator JS imported successfully!');

}, false);
