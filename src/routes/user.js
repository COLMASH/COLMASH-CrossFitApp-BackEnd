const router = require("express").Router();
const userController = require("../controller/user.controller");

router.route("/").post(userController.create);

module.exports = router;
