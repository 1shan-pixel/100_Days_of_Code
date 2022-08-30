import express from 'express'; 

const app = express(); 

const PORT  = 8000; 

app.listen(PORT, () => console.log("Server is running currently sdfon PORT ${PORT}")); 
//two arguments one the PORT and other the call back function