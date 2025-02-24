import FavoritoRepositorio from "../repositorios/favorito.js";
import LivroRepositorio from "../repositorios/livro.js";

const repositorio = new FavoritoRepositorio();
const livroRepositorio = new LivroRepositorio();

class FavoritoServico {
    getTodosFavoritos() {
        const favoritos = repositorio.buscar();
        return favoritos;
    }

    deletaFavoritoPorId (id) {
        return repositorio.excluir(id);
    }

    insereFavorito(id) {
        const livro = livroRepositorio.buscarPorId(id)
        console.log(livro);
        
        const livroFavoritoSalvo = repositorio.salvar(livro);
        return livroFavoritoSalvo;
    }
}

export default FavoritoServico;