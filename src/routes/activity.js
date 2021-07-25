const router = require("express").Router();
const activityController = require("../controller/activity.controller");

router.route("/activityList").get(activityController.list);
router.route("/activityDelete").delete(activityController.destroy);
router.route("/create").post(activityController.create);

module.exports = router;
