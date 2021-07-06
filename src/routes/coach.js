const router = require("express").Router();
const coachController = require("../controller/coach.controller");
const { auth } = require("../utils/middlewares");

router.route("/").get(coachController.list);
router.route("/coachInfo").get(auth, coachController.show);
router.route("/:coachId").put(coachController.update);
router.route("/:coachId").delete(coachController.destroy);
router.route("/signup").post(coachController.signup);
router.route("/signin").post(coachController.signin);

module.exports = router;
