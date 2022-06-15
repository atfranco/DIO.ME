//importa
import express from 'express';
import { routes } from './routes.js';
//define
const server = express();
//habilita sv a ler o json
server.use(express.json())
//definindo rotas
server.use(routes)
// porta

server.listen(5000, () => {
    console.log('servidor on na porta 5000')
})