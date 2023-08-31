import roteadorUsuario from "./routes/usuario.js";
import dotenv from "dotenv";
import express from "express";     

const app = express();              
const port = 3000;                  
app.use(roteadorUsuario);
dotenv.config();

app.get("/", (req, res) => {        
  res.json({
    nome: "Analine Almeida e Silva",      
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});




