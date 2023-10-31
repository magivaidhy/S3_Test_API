import express from "express";
import UserController from "../controller/userscontroller";

const router = express.Router();
const userController = new UserController();

router.get('/users', userController.getAllUsers);

router.post('/user',userController.registerUser);

export default router;