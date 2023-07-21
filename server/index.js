import express from 'express';
import Connection from './database/db.js';

const app = express();
const PORT = 8000;


//? called for establishing connection with database
Connection();
//listen function has 2 parameters to be passed 1st port no. 2nd is callback function which would be excuted as soon as server starts
app.listen(PORT, () => console.log(`Your Server is running successfully on PORT ${PORT}`))