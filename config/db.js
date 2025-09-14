import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    process.exit(1);
}

const connectDB = async () => {
    try {
        
        await mongoose.connect(MONGO_URI, {
            useNewUrlparser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully...');
    } catch (err) {
        console.error('error connecting to database', err);
    }
};

export default connectDB;