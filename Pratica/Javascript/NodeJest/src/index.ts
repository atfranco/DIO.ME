//importa
import express from 'express';
import { routes } from './routes';
//define
const server = express();
//habilita sv a ler o json
server.use(express.json())
// rotas
server.use(routes)
// porta
server.listen(5000, () => {
    console.log('servidor on na porta 5000!! http://localhost:5000')
})