import { Router } from 'express';
import LivroControlador from '../controladores/livro.js';

const rotaLivro = Router();

rotaLivro
    .get('/', LivroControlador.getLivros)
    .get('/:id', LivroControlador.getLivro)
    .post('/', LivroControlador.postLivro)
    .patch('/:id', LivroControlador.patchLivro)
    .delete(':id', LivroControlador.deletaLivro)

export default rotaLivro;
