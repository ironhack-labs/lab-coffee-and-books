  
function initMap() {

  const map = new google.maps.Map(document.querySelector('#map'),
    {
      center: directions.ironhackBCN.coords,
      zoom: 17,
      
    }
  )

  const icon = { url: 'https://img.icons8.com/plasticine/2x/map-pin.png', scaledSize: new google.maps.Size(50, 50) }

  new google.maps.Marker({
    map,
    position: directions.ironhackBCN.coords,
    title: directions.ironhackBCN.title,
    icon            // only URL
  })
}