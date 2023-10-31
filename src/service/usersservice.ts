import UsersSchema from "../models/usermodel";
export default class UserService {
    async getAllUsers() {
        try {
            return await UsersSchema.findAll();
        } catch (error: any) {
            throw new Error(error)
        }
    }
    async registerUser(userDetails: Record<string, any>) {
        try {
            return UsersSchema.create(userDetails);
        } catch (error: any) {
            throw new Error(error)
        }
    }
}