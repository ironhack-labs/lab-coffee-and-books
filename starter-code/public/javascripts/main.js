/*jshint esversion:6*/
$(document).ready(function() {
  const sol = {
    lat: 40.417128,
    lng: -3.703625
  };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: sol,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
  map.setTilt(45);
  // Add restaurant markers to map
  let markers = [];
  myBooks.forEach(function(book) {
    let title = book.name + book.description;
    let position = {
      lat: book.location.coordinates[1],
      lng: book.location.coordinates[0]
    };


    if (book.description === "book") {
      const image = "/images/book3.png";
      pin = new google.maps.Marker({
        position,
        map,
        title,
        icon: image
      });
    } else {
      const image = './images/coffe32.png';
      pin = new google.maps.Marker({
        position,
        map,
        title,
        icon: image
      });
    }

    markers.push(pin);
  });

});
