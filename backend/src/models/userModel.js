const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, maxlength: 50, required: true },
    email: { type: String, maxlength: 30, required: true },
    password: { type: String, required: true },
    tokens: [{
        token: { type: String, required: true },
    }, ],
}, {
    timestamps: true,
    collection: "users",
});

userSchema.pre("save", async function(next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
        "secret"
    );
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error({ error: "Login inválido" });
    }

    const isPasswordMath = await bcrypt.compare(password, user.password);

    if (!isPasswordMath) {
        throw new Error({ error: "Senha inválida" });
    }
    return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;