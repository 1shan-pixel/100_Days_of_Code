import express from 'express'; 
import dotenv from 'dotenv'
import router from './router/routes.js' ; 

import Connection from './database/db.js' ; 
const app = express(); 
dotenv.config(); 

const PORT  = 3000;

app.use('./' , router); 

const USERNAME = process.env.DB_USERNAME; 
const PASSWORD = process.env.DB_PASSWORD ; 
app.listen(PORT, () => console.log(`Server is running currently on PORT ${PORT}`)) 
Connection(USERNAME, PASSWORD); 
//two arguments one the PORT and other the call back function

