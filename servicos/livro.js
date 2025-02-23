import LivroRepositorio from "../repositorios/livro.js";

const repositorio = new LivroRepositorio();

class LivroServico {
    getTodosOslivros() {
        const livros = repositorio.buscar();
        return livros;
    }

    getLivroPorId(id) {
        const livro = repositorio.buscarPorId(id);
        return livro
    }

    insereLivro (livro) {
        return repositorio.salvar(livro);
    }

    modificaLivro (id, novosDados) {
        return repositorio.atualizar(id, novosDados);
    }

    deletaLivroPorId (id) {
        return repositorio.excluir(id);
    }
}

export default LivroServico;
