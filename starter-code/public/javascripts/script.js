
document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  function startMap() {
    const ironhackBCN = {
        lat: -23.5351837,
        lng: -46.5660326};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 12,
        center: ironhackBCN
      }
    );
    
    getPlaces()
    .then(responseFromAPI => {
      places = responseFromAPI.data;
      console.log("Response from API is: ", responseFromAPI.data)
      places.forEach((place,index) => {
        const marker = new google.maps.Marker({
          position: {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0]
          },
          map: map,
          title: `mark ${index}`
        });
      });
      
    })
    .catch(err => console.log("Error is: ", err));
    
    
  }
  function getPlaces() {
    const restPlacesApi = axios.create({
      baseURL: "http://localhost:3000/places/api"
    });

    return restPlacesApi.get()
     
  }

  startMap();
}, false);
