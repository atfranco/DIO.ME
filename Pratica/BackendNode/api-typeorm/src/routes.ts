import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

//INSTANCIANDO A CLASSE

const createUserController = new CreateUserController


// ROTA /root
router.get('/', (request: Request, response: Response) => {

    return response.json('Bem vindo, a API está rodando na porta 5000')
})

// ROTA USUARIOS
router.post('/usuarios', createUserController.handle); 

export { router }
