import express from "express";
import connect_db from "./config/db_connect.js";


const connect = await connect_db();

connect.on("error", (err) => {
  console.error("Erro de Conexão", err);
});



connect.once("open", () => {
  console.log("Conexão executada com sucesso!")
});

const app = express();

app.use(express.json());

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id === Number(id));
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

export default app;
