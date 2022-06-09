import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/Constants'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        // checar se a url existe
        // criar hash para a url
        console.log(req)
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // salvar no banco
        // retornar url gerada
        response.json({ originURL, hash, shortURL })
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        //Pegar hash da url
        const { hash } = req.params
        // Encontrar a url original pelo hash
        const url = {
            originURL: 'https://www.uol.com.br',
            hash: 'NMBYe_oeF',
            shortURL: "http://localhost:5000/NMBYe_oeF",
        }
        // Redirecionar para a url original apartir do for encontrado no DB
        response.redirect(url.originURL)
    }
}