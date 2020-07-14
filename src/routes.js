import { Router } from 'express'

const routes = new Router()

routes.get('/', (_, res) => { return res.json({ ok: true }) })

export default routes