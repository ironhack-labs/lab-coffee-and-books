const mongoose = require('mongoose');
const Place = require('../models/place');

mongoose.connect('mongodb://localhost/coffees-books', {useNewUrlParser: true}).then(()=> {console.log("Connected!")});

const places = [
  {
    name:"La Manuela",
    type: "coffee shop",
    description:"Picoteo, bebidas, tertulias y juegos de mesa en un café clásico con columnas de hierro y techo estucado.",
    location: {type:"Point", coordinates:[40.4257073,-3.705927]}
  },
  {
    name:"Lolina Vintage Café",
    type: "coffee shop",
    description: "Café vintage decorado con muebles y papeles pintados originales de los años 50, 60 y 70. Tiene el encanto de una casa de muñecas...",
    location: {type:"Point", coordinates:[40.4251365,-3.702924]}
  },
  {
    name:"Oitá Bistro",
    type: "coffee shop",
    description: "Coqueta pastelería artesana con pared de ladrillo y vajilla y sillas desiguales que sirve almuerzos.",
    location:{type:"Point", coordinates:[40.4216338,-3.7021921]}
  },
  {
    name:"Ocho y Medio",
    type: "bookstore",
    description: "Librería especializada en el cine, que organiza cursos, vende delicatessen y cuenta con cafetería y terraza.",
    location:{type:"Point", coordinates:[40.4245367,-3.7159213]}
  },
  {
    name:"Tipos Infames",
    type: "bookstore",
    description: "Librería especializada en editoriales y autores independientes, con un rincón mezcla de cafetería y vinoteca.",
    location:{type:"Point", coordinates:[40.4246957,-3.7011121]}
  }
];

Place.collection.drop();
Place.create(places)
.then(places => {
  console.log(`Created ${places}`);
}).then(() => {mongoose.disconnect()});
