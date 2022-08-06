import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from './database';

createConnection()

const server = express();

// configura a app a receber json
server.use(express.json())

// server nas rotas
server.use(router)

server.listen(5000, () => {
    console.log('Server rodando na porta 5000 http://localhost:5000/')
})

