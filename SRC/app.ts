import express from "express";
import { connectDB } from "./config/mongodb";
import messageRoutes from "./routes/messageRoutes"



const app = express();
const PORT = process.env.PORT || 5000;

connectDB(); // conecta ao MongoDB

app.use(express.json());
app.use("/api", messageRoutes);


app.get("/", (req, res) => {
    res.send("AI Support Bot rodando!");
});

//app.listen(PORT, () => {
  //  console.log(` Server rodando na porta ${PORT}`);
//});

export default app;

