# Alura Books API

**API** costruída para fornecer dados para o aplicação front-end [**_Alura Books_**](https://github.com/jeff-pedro/learn-react-alura-books) usado durante os estudos de **React**.

## Requisitos

- Node.js v22.11.0

## Usando

```bash
# instalação das depêndencias
npm install
# modo produção
npm start
# modo desenvolvimento
npm run dev
```

## Rotas

### Livros

Manipula dados de livros.

---

#### GET `/livros`

**Descrição**: Lista todos os livros.

- **Resposta**:

    - **Status**: 200 OK

---

#### GET `/livros/{id}`

**Descrição**: Lista livro por id.

- **Resposta**:
    - **Status**: 201 OK
    - **Body**:
        ```json
            [
                {
                    "id": 1,
                    "nome": "Nome do usuário",
                    "src": "http://localhost:8000/livro.png",
                }
            ]
        ```

---

#### POST `/livros`

**Descrição**: Insere um novo livro.

- **Body**:
    ```json
    {
        "id": 1,
        "nome": "Nome do livro",
        "src": "http://localhost:8000/livro.png",
    }
    ```

- **Resposta**:
    - **Status**: 201 OK

---

#### PATCH `/livros/{id}`

**Descrição**: Atualiza um livro.

- **URL Params**:
    - **id**: ID do livro.

- **Body**:
    ```json
    {
        "nome": "Nome do livro atualizado"
    }
    ```

- **Resposta**:
    - **Status**: 200 OK

---

#### DELETE `/livros/{id}`

**Descrição**: Exclui um livro.

- **URL Params**:
    - **id**: ID do livro.

- **Resposta**:
    - **Status**: 200 OK

---

### Livros Favoritos

Manipula dados de livros favoritos.

---

#### GET `/livros/favotitos`

**Descrição**: Lista todos os livros.

- **Resposta**:
    - **Status**: 200 OK

---

#### POST `/livros/favoritos/{id}`

**Descrição**: Insere um novo livro favorito.

- **URL Params**:
    - **id**: ID do livro.

- **Resposta**:
    - **Status**: 201 OK

---

#### PATCH `/livros/favoritos/{id}`

**Descrição**: Atualiza um livro favorito.

- **URL Params**:
    - **id**: ID do livro.

- **Body**:
    ```json
    {
        "nome": "Nome do livro favorito atualizado",
    }
    ```

- **Resposta**:
    - **Status**: 200 OK

---

#### DELETE `/livros/favoritos/{id}`

**Descrição**: Exclui um livro favorito.

- **URL Params**:
    - **id**: ID do livro.

- **Resposta**:
    - **Status**: 200 OK
