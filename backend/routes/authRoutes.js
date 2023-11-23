const express = require("express");
const { signin } = require("../controllers/authController");
const router = express.Router();

router.get("/", signin);

module.exports = router;
