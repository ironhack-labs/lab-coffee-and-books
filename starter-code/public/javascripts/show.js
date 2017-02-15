/*jshint esversion:6*/
$(document).ready(function() {
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };


  var myLatlng = {
    lat: myBooks.location.coordinates[1],
    lng: myBooks.location.coordinates[0]
  };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
  // Add restaurant markers to map
  let title = myBooks.name;
  let position = {
    lat: myBooks.location.coordinates[1],
    lng: myBooks.location.coordinates[0]
  };

  if (myBooks.description === "book") {
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
