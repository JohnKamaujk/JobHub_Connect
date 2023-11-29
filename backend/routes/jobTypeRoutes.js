const express = require("express");
const router = express.Router();
const {
  createJobType,
  allJobTypes,
  updateJobType,
} = require("../controllers/jobTypeController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

//job type routes

// /api/type/create
router.post("/type/create", isAuthenticated, isAdmin, createJobType);
// /api/type/jobs
router.get("/type/jobs", allJobTypes);
// /api/type/update/type_id
router.put("/type/update/:type_id", isAuthenticated, isAdmin, updateJobType);

module.exports = router;
