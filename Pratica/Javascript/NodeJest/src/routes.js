//importa
import { Router } from 'express'
import { usersController } from './controllers/usersController.js'
//define
const routes = Router()

// GET - Ler
routes.get('/users', usersController.listarUsuario)
// POST - Cria
routes.post('/users', usersController.criarUsuario)

//exporta
export { routes }