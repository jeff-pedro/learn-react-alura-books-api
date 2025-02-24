import * as fs from "fs"

const caminhoDoArquivo = "./livros.json";

class LivroRepositorio {
    salvar(dado) {
        const listaDelivros = this.#carregaArquivo(caminhoDoArquivo);       
        const novoLivro = { id: this.#geraId(), ...dado };
        const novaListaDeLivros = [...listaDelivros, novoLivro]; 
        fs.writeFileSync(caminhoDoArquivo, JSON.stringify(novaListaDeLivros));
        return novoLivro;
    }

    buscar() {
        const livros = this.#carregaArquivo(caminhoDoArquivo);
        return livros;
    }
    
    buscarPorId(id) {
        const livros = this.#carregaArquivo(caminhoDoArquivo);
        return livros.find((livro) => livro.id === Number(id));
    }

    atualizar(id, novosDados) {
        const livros = this.#carregaArquivo(caminhoDoArquivo)
        const livro = livros.find((livro) => livro.id === Number(id));

        if(!livro) {
            return false;
        }

        Object.assign(livro, novosDados);
        // const conteudoMudado = { ...livro, ...novosDados } // Alternativa do código acima
        fs.writeFileSync(caminhoDoArquivo, JSON.stringify(livros));
    }

    excluir(id) {
        const livros = this.#carregaArquivo(caminhoDoArquivo);
        const livro = livros.find((livro) => livro.id === Number(id)); 
        
        if(!livro) {
            return false;
        }

        const livrosFiltrados = livros.filter((livro) => livro.id !== Number(id));
        fs.writeFileSync(caminhoDoArquivo, JSON.stringify(livrosFiltrados));
        return true;
    }

    #carregaArquivo(caminhoDoArquivo) {
        if(!fs.existsSync(caminhoDoArquivo)) {
            fs.writeFileSync(caminhoDoArquivo, JSON.stringify([]));   
        }
        return JSON.parse(fs.readFileSync(caminhoDoArquivo));
    }

    #geraId() {
        const livros = this.#carregaArquivo(caminhoDoArquivo);
        return livros.length ? livros[livros.length - 1].id + 1 : 1;
    }
}
export default LivroRepositorio;
