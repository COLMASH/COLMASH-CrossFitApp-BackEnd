const router = require("express").Router();
const planController = require("../controller/plan.controller");
const { planFilter } = require("../utils/middlewares");

router.route("/create").post(planController.create);
router.route("/planList").get(planController.list);
router.route("/planUpdate").put(planFilter, planController.update);
router.route("/planDelete").delete(planController.destroy);

module.exports = router;
