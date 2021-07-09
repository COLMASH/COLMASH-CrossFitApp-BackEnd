const router = require("express").Router();
const planController = require("../controller/plan.controller");

router.route("/").post(planController.create);
router.route("/").get(planController.list);
router.route("/:planId").get(planController.show);
router.route("/:planId").put(planController.update);
router.route("/:planId").delete(planController.destroy);

module.exports = router;
