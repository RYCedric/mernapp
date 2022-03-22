const express = require("express");
const { register, Login, getMe } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", register);
router.post("/login", Login);
router.get("/me", protect, getMe);

module.exports = router;
