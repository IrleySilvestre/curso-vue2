const User = require("../models/userModel");

exports.listUsers = async(req, res) => {
    try {
        const users = await User.find({});
        return await res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ err: error });
    }
};

exports.registerNewUser = async(req, res) => {
    try {
        // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
        const isUser = await User.find({ email: req.body.email });
        if (isUser.length >= 1) {
            return res.status(409).json({
                message: "Atenção! Este e-mail já possui registro!",
            });
        }
        const newUser = new User(req.body);
        const user = await newUser.save();
        const token = await newUser.generateAuthToken();

        res.status(201).json({
            message: "User created sucessfully",
            user,
            token,
        });
    } catch (error) {
        return res.status(400).json({ err: error });
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (user) {
            await User.deleteOne({ name: req.body.name });
            return res.status(200).json({ msg: "sucesso" });
        } else {
            return res
                .status(400)
                .json({ msg: req.body.name + " " + `nao localizado` });
        }
    } catch (error) {
        return res.status(400).json({
            err: error,
        });
    }
};

exports.loginUser = async(req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return res.status(401).json({
                msg: " Erro ao realizar o Login!, verifique as suas credenciais",
            });
        }

        //const token = await User.generateAuthToken();

        return res.status(201).json({
            message: "Usuario (a) logado com sucesso ",
            user,
            //token,
        });
    } catch (err) {
        return res.status(400).json({ err: err });
    }
};

exports.updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const { email } = req.body;
        const { password } = req.body;

        const doc = await User.findById(id);
        doc.name = name;
        doc.email = email;
        doc.password = password;

        await doc.save();
        return res.status(200).json({ msg: "Sucesso" });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
};

exports.returnUserProfile = async(req, res) => {
    await res.json(req.userData);
};