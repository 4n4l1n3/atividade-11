import roteadorUsuario from "./routes/usuario.js";
import dotenv from "dotenv";
dotenv.config();
//import { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from "./bd.js";    

const app = express();              
const port = 3000;                  

app.get("/", (req, res) => {        
  res.json({
    nome: "Analine Almeida e Silva",      
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});

app.use(roteadorUsuario);import express from "express"; 


