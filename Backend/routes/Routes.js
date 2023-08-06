const express = require("express")
const router = express.Router()
const {registerUser, 
    loginUser,
addMovies,
getMovies,} = require("../pages/pages")

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/addFavorites").put(addMovies)
router.route("/getMovies/:email").get(getMovies)

module.exports = router