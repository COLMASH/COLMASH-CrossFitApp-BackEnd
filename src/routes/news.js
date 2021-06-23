const router = require("express").Router();
const newsController = require("../controller/news.controller");

router.route("/").post(newsController.create);
router.route("/").get(newsController.list);
router.route("/:newsId").delete(newsController.destroy);

module.exports = router;
