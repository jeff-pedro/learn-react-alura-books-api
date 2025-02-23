import express from 'express';
import cors from 'cors';
import rotaLivro from './livro.js';

const router = (app) => {
    app.use(
        cors({ origin: '*' }),
        express.json()
    );

    app.use(
        '/livros',
        rotaLivro
    );
}

export default router;
