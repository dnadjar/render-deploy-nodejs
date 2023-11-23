const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://db_user_p2sn_user:YCmT6zGOw2K3jOcZzHMKfdXVjkzqau3V@dpg-clflfc6f27hc739dgss0-a.frankfurt-postgres.render.com/db_user_p2sn', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
