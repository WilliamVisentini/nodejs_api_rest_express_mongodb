import http from "http";

const PORT = process.env.PORT || 9990;

const routes = {
    "/": "Node.JS !",
    "/test": "Testing !",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    //res.end(routes[req.url]);
    res.end('Curso de Node.js');
})

server.listen(PORT, () => {
    //console.log('servidor escutando!');
    console.log(`Server is running at http://localhost:${PORT}`);
});

/* 
import express from 'express';
import LivroController from '../controllers/livroController.js'; 
*/

/* SHIFT ALT A */

