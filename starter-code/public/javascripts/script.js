
window.onload = () => {
  const markers = []
//    .catch((err)=>{
//      console.log(err)
//    })
  
//   function placeBooksCoffe(position){

//     let center = {
//       lat: position.coordinates[0],
//       lng: position.coordinates[1]
//     }; 
  
//       const pin = new google.maps.Marker({
//         //center es el objeto que tengo que pasar
//         position: center,
//         map: map,
//         title: "Prueba"
//       });
       
//       markers.push(pin);
     
// }



function getStoreBooks() {
  axios.get("/coordenates")
   .then( response => {

    placeStoreBooks(response.data);
   })
   .catch(error => {
     console.log(error);
   })
 }

 function placeStoreBooks(restaurants){
  restaurants.forEach(function(restaurant){
    const center = {
      lat: restaurant.location.coordinates[1],
      lng: restaurant.location.coordinates[0]
    };
    const pin = new google.maps.Marker({
      position: center,
      map: map,
      title: restaurant.name
    });
    markers.push(pin);
    
  });
}

getStoreBooks()


const ironhackBCN = {
  lat: 41.386230, 
  lng: 2.174980
};



const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: ironhackBCN
});







};
