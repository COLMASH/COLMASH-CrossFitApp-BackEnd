const router = require("express").Router();
const adminController = require("../controller/admin.controller");

router.route("/").post(adminController.create);

module.exports = router;
