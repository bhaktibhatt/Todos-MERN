import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Routes from './router/route.js';
const app = express();
app.use(cors());
app.use(express.json({ extended:true }));
app.use(express.urlencoded({ extended:true }))
app.use('/',Routes);
const PORT = 8000;


//? called for establishing connection with database
Connection();
//listen function has 2 parameters to be passed 1st port no. 2nd is callback function which would be excuted as soon as server starts
app.listen(PORT, () => console.log(`Your Server is running successfully on PORT ${PORT}`))