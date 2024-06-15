import User from "../models/user.model.js";

// what is sync and async function in javascript?
import bcryptjs from 'bcryptjs';
const signup = async (req , res) => {

    // console.log(req.body);
    const {username , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password , 10);
    const newUser = new User({username , email , password: hashedPassword});

    try{
        await newUser.save()

    res.status(201).json('user created Successfully!!');

    } catch(error){
        res.status(500).json(error.message);
    }

    

};

export default signup;