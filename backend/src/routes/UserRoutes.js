const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

//==> Rota para criar novo usuario 'User': (POST) localhost:3-001/user/register

router.post('/user/register', userController.registerNewUser)

module.exports = router