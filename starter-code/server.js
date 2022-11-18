const app = require("./app")

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
