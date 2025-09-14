import express from 'express';
const userRouter = express.Router();

import { createUser } from '../controllers/user.Controller.js';

userRouter
    .post('/create', createUser)
    // .get('/getAllUser',)
    // .get('/getSpecificUser',)
    // .post('/updateSpecificUser',)
    // .delete('/deleteSpecificUser', )

export default userRouter;