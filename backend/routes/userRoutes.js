const express = require("express");
const router = express.Router();
const {
  allUsers,
  singleUser,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

router.get("/allusers", isAuthenticated, isAdmin, allUsers);
router.get("/user/:id", isAuthenticated, singleUser);
router.put("/user/edit/:id", isAuthenticated, editUser);
router.delete("/admin/user/delete/:id", isAuthenticated, isAdmin, deleteUser);

module.exports = router;
