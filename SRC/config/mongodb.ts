import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Lendo o .env da raiz do projeto
dotenv.config({ path: path.resolve(__dirname, "../../.env") });


export const connectDB = async () => {
    try {
    //console.log("Tentando conectar no MongoDB com URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log(" MongoDB conectado");
    } catch (error) {
    console.error(" Erro ao conectar MongoDB:", error);
    process.exit(1);
    }};
