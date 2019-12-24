const express = require("express");
var userController = require("../controllers/user");

const router = express.Router();

router.post("/signup", userController.createUser);

router.post("/login", userController.login);

module.exports = router;
