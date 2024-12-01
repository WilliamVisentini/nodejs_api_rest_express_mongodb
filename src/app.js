import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    autor: {
      nome: "J.R.R.",
      sobrenome: "Tolkien"
    },
    anoPublicacao: 1954,
    editora: "HarperCollins",
    ISBN: "978-0261103573",
    generos: ["Fantasia", "Aventura"],
    paginas: 423,
    avaliacao: 4.9,
    disponibilidade: {
      capaDura: true,
      ebook: true,
      audiolivro: true
    }
  },
  {
    id: 2,
    titulo: "1984",
    autor: {
      nome: "George",
      sobrenome: "Orwell"
    },
    anoPublicacao: 1949,
    editora: "Companhia das Letras",
    ISBN: "978-8535914849",
    generos: ["Distopia", "Ficção Científica", "Política"],
    paginas: 336,
    avaliacao: 4.7,
    disponibilidade: {
      capaDura: false,
      ebook: true,
      audiolivro: true
    }
  },
  {
    id: 3,
    titulo: "Duna",
    autor: {
      nome: "Frank",
      sobrenome: "Herbert"
    },
    anoPublicacao: 1965,
    editora: "Aleph",
    ISBN: "978-8576573134",
    generos: ["Ficção Científica", "Aventura"],
    paginas: 680,
    avaliacao: 4.8,
    disponibilidade: {
      capaDura: true,
      ebook: true,
      audiolivro: false
    }
  }
];

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id === Number(id));
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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
