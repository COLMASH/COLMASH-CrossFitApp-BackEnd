const router = require("express").Router();
const userController = require("../controller/user.controller");

router.route("/").post(userController.create);
// router.route("/").get(userController.list);
// router.route("/:userId").get(userController.show);
// router.route("/:userId").put(userController.update);
// router.route("/:userId").delete(userController.destroy);
// router.route("/signup").post(userController.signup);
// router.route("/signin").post(userController.signin);
// router.route("/profile").get(userController.show);

module.exports = router;
