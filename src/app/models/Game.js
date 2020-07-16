import Sequelize, { Model } from 'sequelize'

class Game extends Model {
	static init(sequelize) {
		super.init({
			time_game_started: Sequelize.DATE,
			time_assassination_started: Sequelize.DATE,
			time_game_finished: Sequelize.DATE,
			winning_team: Sequelize.STRING,
			good_team: Sequelize.STRING,
			evil_team: Sequelize.STRING,
			number_of_players: Sequelize.INTEGER,
			players_names: Sequelize.ARRAY(Sequelize.STRING),
			roles: Sequelize.ARRAY(Sequelize.STRING),
			mission_history: Sequelize.ARRAY(Sequelize.STRING),
		},
		{
			sequelize,
		})
    
		return this
	}
  
	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
	}
}

export default Game