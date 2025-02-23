import LivroServico from "../servicos/livro.js";

const servicoLivro = new LivroServico();

class LivroControlador {
    static getLivros(req, res) {
        try {
            const livros = servicoLivro.getTodosOslivros();

            if (livros.length === 0) {
                return res.status(404).json({ mensagem: "Nenhum livro encontrado" });
            };

            res.status(200).json(livros); 
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }

    static getLivro(req, res) {
        try {
            const { id } = req.params;
            
            if (!Number(id)) {
                return res.status(422).json({ mensagem: "Id do livro inválido" });
            };
        
            const livro = servicoLivro.getLivroPorId(id);

            if (!livro) {
                return res.status(404).json({ mensagem: "Nenhum livro encontrado" });
            };
            
            res.status(200).json(livro);
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        } 
    }

    static postLivro (req, res) {
        try {
            const novoLivro = req.body;

            if (novoLivro.nome === "") {
                return res.status(422).json({ mensagem: "O campo nome é obrigatório" });
            }

            const livro = servicoLivro.insereLivro(novoLivro);
            res.status(201).json(livro);
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }

    static patchLivro (req, res) {
        try {
            const { id } = req.params;
            const { body } = req;
    
            if (!Number(id)) {
                return res.status(422).json({ mensagem: "Id do livro inválido" });
            };
    
            const livroAtualizado = servicoLivro.modificaLivro(id, body);

            if (!livroAtualizado) {
                return res.status(404).json({ mensagem: "Nenhum livro encontrado" });
            }

            res.status(200).json({ mensagem: 'Livro atualizado com sucesso!' });    
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }

    static deletaLivro (req, res) {
        try {
            const { id } = req.params;

            if (!Number(id)) {
                return res.status(422).json({ mensagem: "Id do livro inválido" });
            };
    
            const livroExcluido = servicoLivro.deletaLivroPorId(id);
            
            if (!livroExcluido) {
                res.status(404).json({ mensagem: "Nenhum livro encontrado" });
            }
            
            res.status(200).json({ mensagem: 'Livro deletado com sucesso!' });   
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }
}

export default LivroControlador;
