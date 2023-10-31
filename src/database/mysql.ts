import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const port: number = Number(`${process.env.SQL_PORT}`);

const connectToDB = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: `${process.env.DB_HOST}`,
    dialect: 'mysql',
    port: port
  }
);

export default connectToDB;