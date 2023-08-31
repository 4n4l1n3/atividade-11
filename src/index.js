import roteadorUsuario from "./routes/usuario.js";
import dotenv from "dotenv";
import express from "express";     

const app = express();              
const port = 3000; 

app.use(express.json());             
app.use(roteadorUsuario);
dotenv.config();

app.get("/", (req, res) => {        
  res.json({
    nome: "Analine Almeida e Silva: https://github.com/4n4l1n3",      
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});




