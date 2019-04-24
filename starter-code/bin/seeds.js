const mongoose= require('mongoose')
const Place= require('../models/Place')

const places = [
  {
    name:'Centro de Salud',
    image:'https://mxcity.mx/wp-content/uploads/2015/08/pulqueria-el-centro-de-salud-1-300x225.jpg',
    category:'Bar',
    starts: 3,
    location:{
      cordinates: [-99.1645228,19.4163639]
    }


},

{name:'Orinoco',
image:'https://mxcity.mx/wp-content/uploads/2015/08/pulqueria-el-centro-de-salud-1-300x225.jpg',
category:'Bar',
starts: 3,
location:{
  cordinates: [-99.1670934,19.4176724]
}


},
{name:'Mataleon',
image:'https:/data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk',
category:'Bar',
starts: 3,
location:{
  cordinates: [-99.1670934,19.4176724]
}


}

]


mongoose.connect('mongodb://localhost/mamadores')
.then(()=>{
  Place.create(places)
  .then(places=>{
    console.log(`you created ${places.length} places`)
  })
  .catch(err => {
    console.log(err)
  })
  
})
.catch(err=>{
  console.log(err)
})




// mongoose.connection.close()