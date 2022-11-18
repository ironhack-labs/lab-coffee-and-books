const express = require("express")

const logger = require("morgan")

const cookieParser = require("cookie-parser")

const favicon = require("serve-favicon")

const path = require("path")

const session = require("express-session")

const MongoStore = require("connect-mongo")

const MONGO_URI =
  process.env.MONGODB_URI

module.exports = (app) => {
  app.use(logger("dev"))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  app.set("views", path.join(__dirname, "..", "views"))
  app.set("view engine", "hbs");
  app.use(express.static(path.join(__dirname, "..", "public")))

  app.use(
    favicon(path.join(__dirname, "..", "public", "images", "favicon.ico"))
  )

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
      }),
    })
  )
}
