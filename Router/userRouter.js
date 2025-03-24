const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.get("/users", userController.getData);
router.post("/createuser", userController.createData);
router.post("/login", userController.loginUser);

module.exports = router;
