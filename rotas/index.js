import express from 'express';
import rotaLivro from './livro.js';

const router = (app) => {
    app.use('/livros', express.json(), rotaLivro);
}

export default router;
