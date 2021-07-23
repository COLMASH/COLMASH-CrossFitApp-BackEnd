const router = require("express").Router();
const wodController = require("../controller/wod.controller");
const { auth, wodFilter } = require("../utils/middlewares");

router.route("/wodCreate").post(auth, wodController.create);
router.route("/wodList").get(wodController.list);
router.route("/wodInfo").get(auth, wodController.show);
router.route("/wodUpdate").put(auth, wodFilter, wodController.update);
router.route("/wodDelete").delete(wodController.destroy);

module.exports = router;
