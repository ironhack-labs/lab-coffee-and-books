
function initMap(loc) {
  const wework = loc
    const map = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 15,
      center: wework
    }
  );
  var marker = new google.maps.Marker({
    map: map,
    position: wework
  });
}

const locs = [{
  lat: 19.4066836,
  lng: -99.1716416
},
{
    lat: 19.405226,
    lng: -99.1717274
},
{
  lat: 19.405226,
  lng: -99.1717274
},
{
  lat: 19.405226,
  lng: -99.1717274
},
{
  lat: 19.4150452,
  lng: -99.20233
},
{
  lat: 19.3973399,
  lng: -99.1762804
},
{
  lat: 19.397517,
  lng: -99.1727077
},
{
  lat: 19.3967276,
  lng: -99.1727077
},
{
  lat: 19.3963785,
  lng: -99.1740059
},
{
  lat: 19.3963785,
  lng: -99.1740059
}
]

initMap({
  lat:19.3978654,
  lng: -99.1716086
})

const cards = document.getElementsByClassName('resCard')
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click',()=>{
    initMap(locs[i])
  })
  
}




