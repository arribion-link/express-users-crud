import { userModel } from "../models/userSchema.js";
import bcrypt from "bcrypt";


export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please provide all the fields"
            });
        };
        const userExist = await userModel.find({ email });
        if (userExist) {
            return res.status(400).json({
                message: "user already exist",
            });
        };
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();


    } catch (error) {
        res.status(500).json({
            message: "Something went wrong saving the user"
        })
    }
};

export default {
    createUser
}