import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.set("debug", true);

const connectToDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`, { dbName: `${process.env.DB_NAME}` });
    } catch (error:any) {
        throw new Error(error.message)
    }
};

export default connectToDB;