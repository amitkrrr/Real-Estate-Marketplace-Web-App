import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
dotenv.config();

mongoose.connect(process.env.mongo).then (() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
});


// mongoose.connect("mongodb+srv://amit:Amit@063@realestate.p0qiasx.mongodb.net/?retryWrites=true&w=majority&appName=realEstate")

const app = express(); // it gives lot of method to use
app.use(express.json());
app.listen(3000 , () => {
    console.log('server is running on port 3000!!!!');
    }
);

app.use("/api/user" , userRouter);
app.use("/api/auth" , authRouter);

app.use((err , req , res , next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server Error';
    return res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message,
        }
    );
});