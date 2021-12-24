const express = require("express");
const router = express.Router();


//Rota Default
router.get("/api", (req, res) => {
    res.status(200).json({
        status: true,
        msg: "Bem vindo a API - Controle User!!!",
    });
});

module.exports = router;