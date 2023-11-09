
require("dotenv").config()

require("./db")                                 //oye database te ejecutas


const express = require("express")


const hbs = require("hbs")

const app = express()


require("./config")(app)                        // oye config te ejecutas y te llevas app para usar sus metodos


const capitalize = require("./utils/capitalize")        //oye utils/capitalize, te ejecutas!
const projectName = "lab-cofee-and-books"

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`

//ROUTES
const indexRoutes = require("./routes/index.routes")        //oye ./routes/index.routes , te ejecutas!
app.use("/", indexRoutes)

const placesRoutes = require('./routes/places.routes')        //oye placesRoutes, te ejecutass
app.use('/sitios', placesRoutes)

const mapRoutes = require('./routes/maps.routes')
app.use('/mapas', mapRoutes)

const apiRoutes = require('./routes/api.routes')        //estas rutas obtendran los datos de la base de datos, y en lugar de representarlos en la vista, 
app.use('/api', apiRoutes)                                  //los datos se 'guardan' dentro de un objeto JSON

require("./error-handling")(app)            //oye ./error.handling, te ejecutas y además te llevas app para
// usar ahí sus metodos 
module.exports = app
