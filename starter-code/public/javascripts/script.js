document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

function getPlaces() {
  axios.get("/books/api")
      .then(response => {
        return response.data.places
        
      })
      .catch(error => console.log(error))
}

