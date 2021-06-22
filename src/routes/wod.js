const router = require("express").Router();
const wodController = require("../controller/wod.controller");

router.route("/").post(wodController.create);

module.exports = router;
