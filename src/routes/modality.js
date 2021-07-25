const router = require("express").Router();
const modalityController = require("../controller/modality.controller");

router.route("/modalityList").get(modalityController.list);
router.route("/modalityDelete").delete(modalityController.destroy);
router.route("/create").post(modalityController.create);

module.exports = router;
