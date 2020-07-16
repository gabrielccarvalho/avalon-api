import Game from '../models/Game'

class GameController {
	async index(_, res) {
		const gameExists = await Game.findAll()

		if (!gameExists) {
			return res.status(404).json({ error: 'No game was found!' })
		}

		return res.json(gameExists)
	}
}

export default new GameController()