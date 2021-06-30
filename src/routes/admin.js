const router = require("express").Router();
const adminController = require("../controller/admin.controller");

router.route("/").get(adminController.list);
router.route("/:adminId").get(adminController.show);
router.route("/:adminId").put(adminController.update);
router.route("/:adminId").delete(adminController.destroy);
router.route('/signup').post(adminController.signup)
router.route('/signin').post(adminController.signin)

module.exports = router;
