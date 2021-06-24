const router = require("express").Router();
const coachController = require("../controller/coach.controller");

router.route("/").post(coachController.create);
router.route("/").get(coachController.list);
router.route("/:coachId").get(coachController.show);
router.route("/:coachId").put(coachController.update);
router.route("/:coachId").delete(coachController.destroy);
router.route("/signup").post(coachController.signup);
router.route("/signin").post(coachController.signin);

module.exports = router;
