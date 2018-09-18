const ironhackBCN = {
  lat: 41.386230, 
  lng: 2.174980
};
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: ironhackBCN
  });
  console.log(marks)
 marks.forEach(e=>{
   new google.maps.Marker({
     position:{
       lat:e.location.coordinates[0],
       lng:e.location.coordinates[1]},
       map,
       title:e.name
      })
  })
    