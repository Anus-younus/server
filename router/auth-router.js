// express.router ek class he 

// import exprees
const exprees = require("express");
//express router
const router = exprees.Router();
const authControlers = require('../controller/auth-controller')

// go to home page using express router
// router.get("/", (req, res) => {
//     res.status(200).send("Welcom to my page using router");
// });

// most usage
router.route("/").get(authControlers.home)


router.route("/register").post(authControlers.register)

module.exports = router