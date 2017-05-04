/*jshint esversion: 6*/
const placesAPI = new APIHandler("http://localhost:3000/api");

$(document).ready (()=>{
  placesAPI.getFullPlaces();
});
