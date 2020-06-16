const Sequelize = require('sequelize').Sequelize
const sequilize = new Sequelize('node_complete', 'root', 'password', { dialect: 'mysql', host: 'localhost' })

module.exports = sequilize