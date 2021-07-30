const router = require("express").Router();
const exerciseController = require("../controller/exercise.controller");

router.route("/create").post(exerciseController.create);
router.route("/exerciseList").get(exerciseController.list);
router.route("/exerciseDelete").delete(exerciseController.destroy);

module.exports = router;
