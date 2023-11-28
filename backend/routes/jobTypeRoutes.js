const express = require("express");
const router = express.Router();
const {
  createJobType,
  allJobTypes,
} = require("../controllers/jobsTypeController");
const { isAuthenticated } = require("../middleware/auth");

//job type routes

// /api/type/create
router.post("/type/create", isAuthenticated, createJobType);
// /api/type/jobs
router.get("/type/jobs", allJobTypes);

module.exports = router;
