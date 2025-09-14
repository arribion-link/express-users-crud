import express from 'express';
const userRouter = express.Router();

import { createUser , findAllUsers, findSpecificUser } from '../controllers/user.Controller.js';

userRouter
    .post('/create', createUser)
    .get('/getAllUsers', findAllUsers)
    .get('/getSpecificUser/:id', findSpecificUser)
    // .post('/updateSpecificUser',)
    // .delete('/deleteSpecificUser', )

export default userRouter;