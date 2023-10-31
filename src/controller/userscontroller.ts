import UserService from "../service/usersservice";
import { Request, Response } from "express";

const userService = new UserService();

export default class UserController {
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).send(users);
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    async registerUser(req: Request, res: Response) {
        try {
            const body= JSON.parse(JSON.stringify(req.body));
            const user = await userService.registerUser(body);
            res.status(200).send(user);
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}