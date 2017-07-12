const geocoder = new google.maps.Geocoder();

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('form')
  const name = document.getElementById('name')
  const description = document.getElementById('description')
  const address = document.getElementById('address')
  const latitude = document.getElementById('latitude')
  const longitude = document.getElementById('longitude')
  const adressRequest = document.getElementById('address-request')

  let searchedAddress =  null

  let sol = {
    lat: 40.4170441,
    lng: -3.7033601
  }

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

  adressRequest.addEventListener('click', (e)=>{
    let addressText = address.value;

    geocoder.geocode({ address: addressText }, (results, status)=>{
      if(status == 'OK'){
        searchedAddress = results[0].geometry.location
        latitude.value = searchedAddress.lat()
        longitude.value = searchedAddress.lng()
        map.setCenter(searchedAddress)
      }else{
        console.log('All yout base belong to us')
      }
    })
  });

  form.addEventListener('submit', (e)=>{
    let nameFilled = name.value !== ''
    let descriptioFilled = description.value !== ''
    let latitudeFiller = latitude.value != ''
    let longitudeFiller = longitude.value != ''

    if (!nameFilled && !descriptioFilled && !latitudeFiller && !longitudeFiller){
      console.log("Fill the inputs")
      e.preventDefault()
    }
  });
});
