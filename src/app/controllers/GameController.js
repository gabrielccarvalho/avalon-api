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
			return res.status(400).json({ error: 'This user is already in a game.' })
		}
    
		const game = await Game.create({ user_id: req.userId })

		return res.json(game)
	}
  
	async start(req, res) {
		const game = await Game.findOne({ where: { user_id: req.userId } })

		if (!game) {
			return res.status(400).json({ error: 'You cannot start a game that does not exist.'})
		}
    
		if (game.time_game_started !== null) {
			return res.status(400).json({ error: 'The game has already been started.' })
		}
    
		game.time_game_started = new Date()
    
		await game.save()
    
		return res.json(game)
	}
}

export default new GameController()