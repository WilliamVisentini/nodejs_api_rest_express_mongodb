import express from "express";
import connect_db from "./config/db_connect.js";
import livro from "./models/Livro.js";

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

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index === -1) {
    res.status(404).send("Livro não encontrado");
  } else {
    res.status(200).json(livros[index]);
  }
});

app.post("/livros", (req, res) => {
  const novoLivro = { id: livros.length + 1, ...req.body };
  livros.push(novoLivro);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index === -1) {
    res.status(404).send("Livro não encontrado");
  } else {
    livros[index] = { ...livros[index], ...req.body };
    res.status(200).json(livros);
  }
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index === -1) {
    res.status(404).send("Livro não encontrado");
  } else {
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
  }
});

export default app;
