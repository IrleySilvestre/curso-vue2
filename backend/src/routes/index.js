const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    const date = new Date()
    console.log("Time: ", date);
    next();
});

//Rota Default
router.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        msg: "Bem vindo a API - Controle User!!!",
    });
});

module.exports = router;