import Game from '../models/Game'

class GameController {
	async index(_, res) {
		const gameExists = await Game.findAll()

		if (!gameExists) {
			return res.status(404).json({ error: 'No game was found!' })
		}

		return res.json(gameExists)
	}
  
	async store(req, res) {
		const gameExists = await Game.findOne({ where: { user_id: req.userId } })

		if (gameExists) {
			return res.status(400).json({ error: 'Game already exists.' })
		}
    
		const game = await Game.create({ user_id: req.userId })

		return res.json(game)
	}
}

export default new GameController()