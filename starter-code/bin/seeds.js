// const mongoose = require("mongoose")

// Import the function that creates the Places
const createPlacesSeed = require("./seeds/places.seeds")

// Import mongoose configuration
require("./../configs/db.config")

/**
 * Async function that executes all the seeds functions
 * that we code inside.
 * It also uses await to stop the process until the functions
 * are fully executed.
 **/
const executeSeeds = async () => {
  console.clear()
  await createPlacesSeed()
  console.log("\n\t1. Places created successfully!")
}

executeSeeds().then(seedsCreated => {
  console.log("\n\t-----------------------------------")
  console.log("\t| All sedds executed successfully |")
  console.log("\t-----------------------------------\n")
  process.exit(0)
})
