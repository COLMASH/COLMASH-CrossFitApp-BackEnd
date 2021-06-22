const router = require("express").Router();
const wodController = require("../controller/wod.controller");

router.route("/").post(wodController.create);
// router.route("/").get(wodController.list);
// router.route("/:wodId").get(wodController.show);
// router.route("/:wodId").put(wodController.update);
// router.route("/:wodId").delete(wodController.destroy);

module.exports = router;
