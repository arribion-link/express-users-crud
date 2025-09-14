import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT;
if (!port) {
    process.exit(1);
}

// middlwares
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     urlencoded: true
// }));
app.use(express.json());
app.use(cors());

app.use('/api/', userRouter);

// Imports
import userRouter from "./src/routes/user.Route.js";
import connectDB from "./config/db.js";


async function initApp() {
    await connectDB();
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    });
    
};

initApp();