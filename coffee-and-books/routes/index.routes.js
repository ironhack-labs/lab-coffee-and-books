// ---------- [INITIAL SETUP] ---------- 

const router = require("express").Router();

// ---------- [HOME PAGE] ---------- 

router.get("/", (req, res, next) => {
  res.render("index");
});

// ---------- [EXPORT SETUP] ---------- 

module.exports = router;
