const User = require( "../models/userModel");
const passport = require('passport');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {

    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(200).send("New User Created");
    } catch (e) {
        res.status(404).send(e.message);
    }

};


module.exports = {
    signup,
}