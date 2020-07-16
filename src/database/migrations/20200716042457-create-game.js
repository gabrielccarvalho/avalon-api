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
				allowNull: true,
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
				allowNull: false,
			},
			good_team: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			evil_team: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			number_of_players: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			players_names: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: false,
			},
			roles: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: false,
			},
			mission_history: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: false,
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