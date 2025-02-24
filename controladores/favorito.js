import FavoritoServico from "../servicos/favorito.js";

const servico = new FavoritoServico();

class FavoritoControlador {
    static getFavoritos(req, res) {
        try {
            const livrosFavoritos = servico.getTodosFavoritos();

            if (livrosFavoritos.length === 0) {
                return res.status(404).json({ mensagem: "Nenhum livro favorito encontrado" });
            };

            res.status(200).json(livrosFavoritos); 
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }


    static postFavorito (req, res) {
        try {
            const idDoLivro = req.params.id;

            if (!Number(idDoLivro)) {
                return res.status(422).json({ mensagem: "Id do livro inválido" });
            }

            const livroFavorito = servico.insereFavorito(idDoLivro);
            res.status(201).json(livroFavorito);
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }

    static deletaFavorito (req, res) {
        try {
            const idDoLivro = req.params.id;

            if (!Number(idDoLivro)) {
                return res.status(422).json({ mensagem: "Id do livro inválido" });
            };
    
            const livroExcluido = servico.deletaFavoritoPorId(idDoLivro);
            
            if (!livroExcluido) {
                res.status(404).json({ mensagem: "Nenhum livro favorito encontrado" });
            }
            
            res.status(200).json({ mensagem: 'Livro favorito deletado com sucesso!' });   
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }
}
export default FavoritoControlador;
