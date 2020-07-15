import { Router } from 'express'

import { User, Session } from './app/controllers'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.get('/users', User.index)
routes.post('/users', User.store)

routes.post('/session', Session.store)

routes.use(authMiddleware)

routes.put('/users', User.update)

export default routes