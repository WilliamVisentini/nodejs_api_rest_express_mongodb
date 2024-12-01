import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
    "autor": {
      "nome": "J.R.R.",
      "sobrenome": "Tolkien"
    },
    "anoPublicacao": 1954,
    "editora": "HarperCollins",
    "ISBN": "978-0261103573",
    "generos": ["Fantasia", "Aventura"],
    "paginas": 423,
    "avaliacao": 4.9,
    "disponibilidade": {
      "capaDura": true,
      "ebook": true,
      "audiolivro": true
    }
  },
  {
    "titulo": "1984",
    "autor": {
      "nome": "George",
      "sobrenome": "Orwell"
    },
    "anoPublicacao": 1949,
    "editora": "Companhia das Letras",
    "ISBN": "978-8535914849",
    "generos": ["Distopia", "Ficção Científica", "Política"],
    "paginas": 336,
    "avaliacao": 4.7,
    "disponibilidade": {
      "capaDura": false,
      "ebook": true,
      "audiolivro": true
    }
  },
  {
    "titulo": "Duna",
    "autor": {
      "nome": "Frank",
      "sobrenome": "Herbert"
    },
    "anoPublicacao": 1965,
    "editora": "Aleph",
    "ISBN": "978-8576573134",
    "generos": ["Ficção Científica", "Aventura"],
    "paginas": 680,
    "avaliacao": 4.8,
    "disponibilidade": {
      "capaDura": true,
      "ebook": true,
      "audiolivro": false
    }
  }
]

function buscaLivro(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  })
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("livro removido com sucesso");
});

export default app;
