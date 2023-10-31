import { DataTypes } from "sequelize";
import connectToDB from "../database/mysql";

const UsersSchema =  connectToDB.define('users',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    image_url: {
        type: DataTypes.STRING
    }
});

export default UsersSchema;
