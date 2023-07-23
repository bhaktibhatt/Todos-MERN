
//! Used to connect to mongoDb dataBase

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-dqxwodw-shard-00-00.wdaurhm.mongodb.net:27017,ac-dqxwodw-shard-00-01.wdaurhm.mongodb.net:27017,ac-dqxwodw-shard-00-02.wdaurhm.mongodb.net:27017/?ssl=true&replicaSet=atlas-7rwg63-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database:', error.message);
    });
};

export default Connection;
