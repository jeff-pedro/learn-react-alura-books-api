import * as fs from "fs"

const caminhoDoArquivo = "./favoritos.json";

class FavoritoRepositorio {
    salvar(novoLivroFavorito) {
        const listaDeFavoritos = this.#carregaArquivo(caminhoDoArquivo);       
        fs.writeFileSync(caminhoDoArquivo, JSON.stringify([...listaDeFavoritos, novoLivroFavorito]));
        return novoLivroFavorito;
    }

    buscar() {
        const livros = this.#carregaArquivo(caminhoDoArquivo);
        return livros;
    }

    excluir(id) {
        const favoritos = this.#carregaArquivo(caminhoDoArquivo);
        const favorito = favoritos.find((favorito) => favorito.id === Number(id)); 
        
        if(!favorito) {
            return false;
        }

        const favoritosFiltrados = favoritos.filter((favorito) => favorito.id !== Number(id));
        fs.writeFileSync(caminhoDoArquivo, JSON.stringify(favoritosFiltrados));
        return true;
    }

    #carregaArquivo(caminhoDoArquivo) {
        if(!fs.existsSync(caminhoDoArquivo)) {
            fs.writeFileSync(caminhoDoArquivo, JSON.stringify([]));   
        }
        return JSON.parse(fs.readFileSync(caminhoDoArquivo));
    }   
}
export default FavoritoRepositorio;
