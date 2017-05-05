/*jshint esversion: 6*/
const placesAPI = new APIHandler("http://localhost:3000/api");

$(document).ready (()=>{
  placesAPI.getFullPlaces();

  $('.place-container').on('click','.delete-link', (e) => {
    e.preventDefault();
    var place_id =e.target.getAttribute('href');
    placesAPI.deleteOne(place_id);
  });
});
