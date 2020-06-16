const Sequilize = require('sequelize')
const sequilize = require('../util/database')

const User = sequilize.define('user', {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequilize.STRING,
    username: Sequilize.STRING
  })
  
  module.exports = User