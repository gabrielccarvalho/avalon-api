import { Router } from 'express'

import { User, Session, Game } from './app/controllers'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.get('/users', User.index)
routes.post('/users', User.store)

routes.get('/games', Game.index)

routes.post('/session', Session.store)

routes.use(authMiddleware)

routes.post('/games', Game.store)

routes.put('/users', User.update)

export default routes