const router = require("express").Router();
const coachController = require("../controller/coach.controller");

router.route("/").post(coachController.create);

module.exports = router;
