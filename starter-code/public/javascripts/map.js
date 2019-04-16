//select the map div and create it with the api methods, create the markes inside the then

document.querySelector('#button').onclick = function () {
  let container = document.querySelector('#container')
  container.innerHTML = '';
  axios.get('http://localhost:3000/places')
  .then(places => {
    places.data.forEach(place => {
      let color;
      place.type === 'coffee shop' ? color = 'red' : color = 'blue'
      createPlace(place);
      setMarker(place.lat, place.long, map, place.name, color)
    });
  })
}

const map = new google.maps.Map(
  document.getElementById('map'),
  {
      zoom: 5,
      center: {lat: 40,lng:1}
  }
);

function setMarker(lat, lng, map, title, color) {
  new google.maps.Marker({
      icon: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
      position: {
          lat: lat,
          lng: lng
      },
      map: map,
      title: title
  });
}

function createPlace (place){
  let container = document.querySelector('#container')
  let p = document.createElement('p');
  p.innerHTML = place.name
  container.appendChild(p);
  let p2 = document.createElement('p');
  p2.innerHTML = place.type
  container.appendChild(p2);
  let a = document.createElement('a')
  a.innerHTML = 'Update';
  a.setAttribute('href',`/update/${place._id}`);
  container.appendChild(a);
  let a2 = document.createElement('a')
  a2.innerHTML = 'Remove';
  a2.setAttribute('href',`/remove/${place._id}`);
  container.appendChild(a2);
}