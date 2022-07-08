import { Request } from 'express'
import { makeMockResponse } from '../mocks/mockResponse';
import { UsersController } from "./usersController"


describe('Users Controller', ()=>{
    const usersController = new UsersController();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
// TESTANDO LISTAGEM DE USUARIOS
    it('Deve listar todos os usuários', ()=> {
        usersController.listarUsuario(mockRequest, mockResponse)
        // expectativa do status code = 200
        expect(mockResponse.state.status).toBe(200)
        // expectativa de um json com 4 entradas
        expect(mockResponse.state.json).toHaveLength(4)
    })
// TESTANDO CRIACAO DE USUARIOS
    it('Deve criar um novo usuário', ()=> {
        mockRequest.body = {
            name: 'Novo usuário'
        }        
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Novo usuário criado`})
    })
// TESTANDO CRIACAO DE USUARIOS
    it('Não deve criar um usuario com o nome em branco', () =>{
        mockRequest.body = {
            name: ''
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possivel criar usuarios em branco'})
    })
})
