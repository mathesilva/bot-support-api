import dotenv from 'dotenv';
import app from "./app";
//import { connectDB } from './config/mongodb';


dotenv.config();

//connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server rodando na porta ${PORT}`)});

