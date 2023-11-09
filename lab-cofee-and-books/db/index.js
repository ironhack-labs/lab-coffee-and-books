
const mongoose = require("mongoose")      


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-cofee-and-books"    // me crea en mongo lab-cofee-and-books

mongoose                                  // arriba requiero mongoose para usar aqui sus metodos
  .connect(MONGO_URI)
  .then((x) => {
    const databaseName = x.connections[0].name
    console.log(`Connected to Mongo! Database name: "${databaseName}"`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err)
  })
