//importa
import { Router } from 'express'
import { UsersController } from './controllers/usersController'
//define
const routes = Router()
// Já que o usersController esta como CLASSE, definindo ele abaixo
const usersController = new UsersController()

// GET - Ler
routes.get('/users', usersController.listarUsuario)
// POST - Cria
routes.post('/users', usersController.criarUsuario)

//exporta
export { routes }