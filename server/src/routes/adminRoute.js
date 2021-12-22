const router = require("express").Router();
const { adminController } = require("../controllers");

router.get("/", adminController.helloAnhDuc);

module.exports = router;
