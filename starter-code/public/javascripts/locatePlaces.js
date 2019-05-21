
window.onload = () =>{
  //document.getElementById('address').onchange = () => geocodeAddress(new google.maps.Geocoder())
  document.getElementById('add-new').onclick = () => saveNewPlace()
}


const geocodeAddress =  (geocoder,address) => {
  return new Promise((resolve, reject)=>{
    console.log(address)
    geocoder.geocode({
        'address': address
      },
      (results, status) => {
        if (status === 'OK') {
          resolve([
              results[0].geometry.location.lat(),
              results[0].geometry.location.lng()
          ])
        }/* else { //hay veces que solo funciona si le quito el else :(
          reject(new Error(`Couldnt\'t find the location ${address}`))
        } */ 
      })
  })
  
}

const saveNewPlace= ()=>{

  const address = document.getElementById('address').value

  const body = {
    name: document.getElementById('name').value,
    type: document.getElementById('type').value
  }

  if(!address || !body.name || !body.type){
    console.log('completa todos los campos')
    return
  }

  geocodeAddress(new google.maps.Geocoder(), address)
  .then(coordinates=> {
    console.log(coordinates)
    const body = {
      name: document.getElementById('name').value,
      type: document.getElementById('type').value,
      location: {
        type: 'Point',
        coordinates: coordinates
      }
    }
      console.log('body en then',body)
      axios.post('/places/add/new', body)
           .then(response => {
             console.log('Respuesta', response)
             window.location.pathname = '/places'
            })
           .catch(err => console.log(err))
  })
  .catch(err=>console.log(err))

}



