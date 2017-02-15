/*jshint esversion:6*/
$(document).ready(function(){
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

  const map = new google.maps.Map(document.getElementById('map'),{
    zoom:15,
    center: sol
  });
  let markers = myLocals.map(item =>{
    let name = item.name;
    let position = {
      lat: parseInt(item.location.coordinates[1]),
      lng: parseInt(item.location.coordinates[0])
    };
    let pin = new google.maps.Marker({position, map, name});
    if(item.type ==='Cofee'){
      pin.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    }else{
      pin.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');

    }
    return pin;
  });
console.log(markers);


});
