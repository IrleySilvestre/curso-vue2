const User = require("../models/userModel");

exports.listUsers = async (req, res)=>{
  try {
    const users =  await User.find({})
      return await res.status(200).json(users)
  } catch (error) {
      return res.status(400).json({ err: error });
  }
}

exports.registerNewUser = async (req, res) => {

  try {
    // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
    const isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res
        .status(409)
        .json({ message: "Atenção! Este e-mail já possui registro!" });
    }
    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();

    res.status(201).json({ message: "User created sucessfully", user, token });
  } catch (error) {
    return res.status(400).json({ err: error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findByCredentials(email, password);

    if (!user) {
      res.status(401).json({
        msg: " Erro ao realizar o Login!, verifique as suas credenciais",
      });
    }

    const token = await User.generateAuthToken();
    res
      .status(201)
      .json({ message: "Usuario (a) logado com sucesso ", user, token });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};
