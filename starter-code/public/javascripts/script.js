document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

  const ironhackBCN = {
  	lat: 41.3977381,
  	lng: 2.190471916};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 5,
      center: ironhackBCN
    }
  );

axios
        .get("http://localhost:3000/test")
        .then(JSONPayload => {
          console.log(JSONPayload.data)
            JSONPayload.data.places.forEach(place => {
                const marker = new google.maps.Marker({
                    position: {
                        lng: place.location.coordinates[0],
                        lat: place.location.coordinates[1],
                    },
                    animation: google.maps.Animation.DROP,
                    map: map,
                    title: place.name
                });
            })
        })
