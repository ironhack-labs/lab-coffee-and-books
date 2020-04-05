
const casaDoPorco = {
  lat: -23.5448658,
  lng: -46.644659
};

const barOnca = {
  lat: -23.5465084,
  lng: -46.6445317
}

const ironhack = {
  lat: -23.5617714,
  lng: -46.6601914
}

const locations = [casaDoPorco, barOnca, ironhack];

const initMap = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: ironhack,
    zoom: 15
  });

  // axios.get('http://localhost:3000/api/index')
  // .then(responde =>
  // .catch()

  locations.forEach(location => {
    new google.maps.Marker({
      position: location,
      map: map,
      title: 'Casa do Porco Here!'
    });
  });
}

initMap();
