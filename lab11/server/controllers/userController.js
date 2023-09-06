import User from "../models/userModel";

const signup = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send("New User Created");
    }catch (e){
        res.status(404).send(e.message);
    }
}

const login = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send("New User Created");
    }catch (e){
        res.status(404).send(e.message);
    }
}

const logout = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send("New User Created");
    }catch (e){
        res.status(404).send(e.message);
    }
}

const forgotpassword = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send("New User Created");
    }catch (e){
        res.status(404).send(e.message);
    }
}

module.exports = {
    signup,
    login,
    logout,
    forgotpassword
}