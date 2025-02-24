import express from 'express';
import cors from 'cors';
import rotaLivro from './livro.js';
import rotaFavorito from './favorito.js';

const router = (app) => {
    app.use(
        cors({ origin: '*' }),
        express.json()
    );

    app.use(
        '/livros',
        rotaFavorito,
        rotaLivro,
    );
}

export default router;
