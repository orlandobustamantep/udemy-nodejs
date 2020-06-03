const Sequelize = require('sequelize').Sequelize
const sequilize = new Sequelize('node-complete', 'newuser', 'password', { dialect: 'mysql', host: 'localhost' })

module.exports = sequilize