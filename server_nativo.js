import http from "http";

const PORT = process.env.PORT || 9990;

const routes = {
    "/": "Node.JS !",
    "/test": "Testing !",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(routes[req.url]);
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

/* 
import express from 'express';
import LivroController from '../controllers/livroController.js'; 
*/

/* SHIFT ALT A */

