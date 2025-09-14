import { userModel } from "../models/userSchema.js";
import bcrypt from "bcrypt";

// create users
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please provide all the fields"
            });
        };
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
            message: "User with this email already exists",
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json({
            message: "user created successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong saving the user"
        })
    }
};

// find all users
export const findAllUsers = async (req, res) => {
    try {
       const users = await userModel.find();
        res.status(200).json({
            message: `users found`,
            users
        });
    } catch (error) {
        res.status(500).json({
        message: "Something went wrong saving the user",
        });
    }
};

// find specific user
export const findSpecificUser = async (req, res) => {
    const userId = req.params.id;
    try {
        if (!userId) {
        return res.status(404).json({
            message: "User Id not found",
        });
        }
        const specificUser = await userModel.findById(userId);
        
        res.status(200).json({
            message: `user with ${userId} was found Details:`,
            specificUser
        });
    } catch (error) {
        res.status(500).json({
        message: "Something went wrong saving the user",
        });
    }
};

export default {
    createUser,
    findAllUsers,
    findSpecificUser
}