const router = require("express").Router();
const exerciseController = require("../controller/exercise.controller");

router.route("/").post(exerciseController.create);
router.route("/").get(exerciseController.list);
router.route("/:exerciseId").get(exerciseController.show);
router.route("/:exerciseId").delete(exerciseController.destroy);

module.exports = router;
