const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});

//Rota Default
router.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        msg: "Bem vindo a APi - Controle User!!!",
    });
});

module.exports = router;