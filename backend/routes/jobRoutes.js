const express = require("express");
const router = express.Router();
const { createJob, singleJob } = require("../controllers/jobController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

//jobs routes

// /api/job/create
router.post("/job/create", isAuthenticated, isAdmin, createJob);
// /api/job/id
router.get('/job/:id', singleJob);

module.exports = router;