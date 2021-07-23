const router = require("express").Router();
const coachController = require("../controller/coach.controller");
const { auth, formData, coachFilter } = require("../utils/middlewares");

router.route("/coachList").get(coachController.list);
router.route("/coachInfo").get(auth, coachController.show);
router.route("/coachProfilePic").put(auth, formData, coachController.update);
router.route("/coachUpdate").put(auth, coachFilter,coachController.update);
router.route("/coachDelete").delete(coachController.destroy);
router.route("/create").post(coachController.create);
router.route("/signup").post(coachController.signup);
router.route("/signin").post(coachController.signin);

module.exports = router;
