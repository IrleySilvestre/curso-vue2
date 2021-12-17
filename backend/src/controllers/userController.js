const User = require('../models/userModel')

exports.registerNewUser = async(req, res)=>{
    try {
        let isUser = await User.find({email: req.body.email})
        if(isUser.length >= 1){

        }
    } catch (error) {
        return res.status(400).json(error)
    }
}