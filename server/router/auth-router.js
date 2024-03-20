const express = require("express");
const router = express.Router();
//const {home, register }= require("../controllers/auth-controller");
const authcontrollers = require("../controllers/auth-controller");


// multple way to write create tje route page
// router.get('/',(req,res)=>{
// res
//     .status(200)
// 	.send("welcome to my world by despodevil by yt");
// });


//another way to write the routes
// router.route('/').get((req,res) => {
// res
// 	.status(200)
// 	.send("welcome sir")
// });



// router.route('/register').get((req,res) =>{
// 	res.status(200).send("welcome to registeration ,it's lunnch time ")
// });

router.route('/').get(authcontrollers.home);
router.route('/register').post(authcontrollers.register);

module.exports = router;
