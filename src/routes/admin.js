const router = require("express").Router();
const adminController = require("../controller/admin.controller");

router.route("/").post(adminController.create);
router.route("/").get(adminController.list);
router.route("/:adminId").get(adminController.show);
router.route("/:adminId").put(adminController.update);
router.route("/:adminId").delete(adminController.destroy);

module.exports = router;
