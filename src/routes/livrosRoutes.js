import express from "express";
import LivroController from "../controllers/controllers";

const router = express.Router();

routers.get("/livros",LivroController.listarLivros);