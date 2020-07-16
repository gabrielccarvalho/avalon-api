module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('games', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: false,
			},
			time_game_started: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			time_assassination_started: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			time_game_finished: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			winning_team: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			good_team: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			evil_team: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			number_of_players: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			players_names: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: true,
			},
			roles: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: true,
			},
			mission_history: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		}),

	down: queryInterface => queryInterface.dropTable('games'),
}