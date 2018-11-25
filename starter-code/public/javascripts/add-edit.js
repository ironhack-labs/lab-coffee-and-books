const loadData = (map) => {
  let info = getInfo(map);
  console.log(info);
  let marker = singleMarker(info.title, info.location, map, info.color);

  google.maps.event.addListener(map, "click", function (e) {

    document.querySelector('input[name=latitude]').value = e.latLng.lat();
    document.querySelector('input[name=longitude]').value = e.latLng.lng();

    info = getInfo(map);

    if(marker){marker.setMap(null)}
    marker = singleMarker(info.title, info.location, map, info.color);

    document.querySelector('.locationStatus').innerHTML = "Address ready";
  });
};

const getInfo = (map) => {
  let color = document.querySelector('select[name=type]').value === "coffee shop" ? 'red' : 'blue';
  let info = {
    title: document.querySelector('input[name=name]').value,
    color: color,
    location: {
      lat: parseFloat(document.querySelector('input[name=latitude]').value),
      lng: parseFloat(document.querySelector('input[name=longitude]').value)
    }
  };
  return info;
}
