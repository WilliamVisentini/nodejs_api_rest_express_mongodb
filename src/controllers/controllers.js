import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    }

};

export default LivroController;

/* app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
}); */

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