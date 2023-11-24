const express = require("express");
const { signup, signin, logout, userProfile } = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);
router.get("/me", isAuthenticated,userProfile);

module.exports = router;
