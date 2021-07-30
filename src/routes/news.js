const router = require("express").Router();
const newsController = require("../controller/news.controller");
const { formData } = require("../utils/middlewares");

router.route("/delete").delete(newsController.destroy);
router.route("/create").post(formData, newsController.create);
router.route("/newsList").get(newsController.list);

module.exports = router;
