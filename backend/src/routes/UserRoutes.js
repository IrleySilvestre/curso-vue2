const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//==> Rota para criar novo usuario 'User': (POST) localhost:3-001/user/register

router.post("/user/register", userController.registerNewUser);

router.post("/user/login", userController.loginUser);

router.get("/user/profile", userController.returnUserProfile);

module.exports = router;
