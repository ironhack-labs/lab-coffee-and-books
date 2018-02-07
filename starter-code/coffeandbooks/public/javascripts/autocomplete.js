'use strict';

const input = document.getElementById('autocomplete');
const options = {
  types: ['geocode']
};

const autocomplete = new google.maps.places.Autocomplete(input, options);

google.maps.event.addListener(autocomplete, 'place_changed', getInfoPlace);

function getInfoPlace () {
  const newPlace = autocomplete.getPlace();
  console.log(newPlace);
  console.log(newPlace.geometry.location.lat());
  console.log(newPlace.geometry.location.lng());
}
// const newPlace = autocomplete.getPlace();
// console.log(newPlace);
