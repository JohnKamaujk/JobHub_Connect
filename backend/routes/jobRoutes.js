const express = require("express");
const router = express.Router();
const { createJob } = require("../controllers/jobController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

//jobs routes

// /api/job/create
router.post("/job/create", isAuthenticated, isAdmin, createJob);

module.exports = router;