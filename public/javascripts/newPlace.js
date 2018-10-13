window.onload = () => {

  const
    query = document.getElementById(`autocomplete`),
    name  = document.getElementById(`name`),
    lat   = document.getElementById(`lat`),
    lng   = document.getElementById(`lng`),

    dropdown = new google.maps.places.Autocomplete(query)
  ;

  dropdown.addListener(`place_changed`, () => {
    console.log(dropdown.getPlace());

    const place = dropdown.getPlace();

    name.value = place.name;
    lat.value  = place.geometry.location.lat();
    lng.value  = place.geometry.location.lng();
  });

}