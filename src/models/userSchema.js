import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        required: true,
        unique: false,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        unique: false,
        type: String
    }
},{timeStamp:true});

export const userModel = mongoose.model('userCollection', userSchema);