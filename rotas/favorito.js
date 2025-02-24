import { Router } from 'express';
import FavoritoControlador from '../controladores/favorito.js';

const rotaFavorito = Router();

rotaFavorito
    .get('/favoritos', FavoritoControlador.getFavoritos)
    .post('/favoritos/:id', FavoritoControlador.postFavorito)
    .delete('/favoritos/:id', FavoritoControlador.deletaFavorito)

export default rotaFavorito;
