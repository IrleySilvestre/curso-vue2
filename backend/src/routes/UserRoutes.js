const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

//==> Rota para criar novo usuario 'User': (POST) localhost:3-001/user/register

router.post("/user/register", userController.registerNewUser);

router.get("/user/list", userController.listUsers);

router.post("/user/login", userController.loginUser);

router.get("/user/profile", auth, userController.returnUserProfile);

router.post("/user/delete", userController.deleteUser);

router.post("/user/update/:id", userController.updateUser);

router.get("/user/listById/:id", userController.listUsersById);

module.exports = router;
