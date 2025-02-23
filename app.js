import express from 'express';
import router from './rotas/index.js';

const app = express();
const port = 8000;

router(app);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
