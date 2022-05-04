const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.get("/user/:verify", userCtrl.verify);

router.post("/user/register",  userCtrl.register);

module.exports = router;
