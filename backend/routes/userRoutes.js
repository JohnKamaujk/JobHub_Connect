const express = require("express");
const router = express.Router();
const { allUsers } = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");

router.get("/allusers", isAuthenticated, allUsers);

module.exports = router;
