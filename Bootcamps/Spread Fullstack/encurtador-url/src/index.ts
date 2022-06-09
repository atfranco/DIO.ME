import { URLController } from './controller/URLController'
import express from 'express'

const api = express()
api.use(express.json())

const urLController = new URLController()
api.post('/shorten', urLController.shorten)
api.get('/:hash', urLController.redirect)

api.listen(5000, () => console.log('Express acompanhando(listening)'))